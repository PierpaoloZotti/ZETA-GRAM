import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";


//Get a user
export const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModel.findById(id);
        if (user) {
            const { password, ...otherStuff } = user._doc; //With this line we exclude the password to return
            res.status(200).json(otherStuff);
        } else {
            res.status(404).json("Nobody with that Id man!")
        }

    } catch (error) {
        res.status(500).json({ error });
    }
}

//Update a user
export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { currentUserId, currentUserAdminStatus, password } = req.body;
    /*
check if user who perform the request is the profile's user than will be modified.
Or if user who perform the request is the admin of de social media app

    */
    if (id === currentUserId || currentUserAdminStatus) {
        try {
            if (password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt);
            }
            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true }) //new:true means to pass to response the actualized info that was modified
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}