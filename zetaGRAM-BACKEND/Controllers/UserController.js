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
    } else {
        res.status(403).json("Access Denied, you are trying to accessto access a profile that you don't own");
    }
}

//Delete a user

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const { currentUserId, currentUserAdminStatus } = req.body;

    if (currentUserId === id || currentUserAdminStatus) {
        try {
            const user = await UserModel.findByIdAndDelete(id);
            res.status(200).json("User deleted")
        } catch (error) {
            res.status(400).json("User not found")
        }
    } else {
        res.status(403).json("Access Denied, you don't own this profile");
    }
};

//Follow a user

export const followUser = async (req, res) => {
    const id = req.params.id;

    const { currentUserId } = req.body;
    if (currentUserId === id) {
        res.status(403).json("Action forbidden, you can't follow yourself")
    } else {
        try {
            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(currentUserId)
            if (!followUser.following.includes(currentUserId)) {
                await followUser.updateOne({ $push: { following: currentUserId } })
                await followingUser.updateOne({ $push: { followers: id } })
                res.status(200).json("User followed successfully")
            } else {
                res.status(200).json("User already followed by You")
            }
        } catch (error) {
            res.status(403).json("Access Denied, you don't own this profile");
        }
    }
}

//Unfollow a user followed

export const unfollowUser = async (req, res) => {
    const id = req.params.id;

    const { currentUserId } = req.body;
    if (currentUserId === id) {
        res.status(403).json("Action forbidden, you can't unfollow yourself")
    } else {
        try {
            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(currentUserId)
            if (followUser.following.includes(currentUserId)) {
                await followUser.updateOne({ $pull: { following: currentUserId } })
                await followingUser.updateOne({ $pull: { followers: id } })
                res.status(200).json("User unfollowed successfully")
            } else {
                res.status(200).json("User don't followed by You")
            }
        } catch (error) {
            res.status(403).json("Access Denied, you don't own this profile");
        }
    }
}