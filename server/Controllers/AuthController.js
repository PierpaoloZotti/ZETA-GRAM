import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
    // const { username, password, firstname, lastname, isAdmin } = req.body;
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashedPassword
    // const newUser = new UserModel({ username, password: hashedPassword, firstname, lastname, isAdmin })
    const newUser = new UserModel(req.body);
    const { username } = req.body;
    try {

        const validateUsername = await UserModel.findOne({ username })
        if (validateUsername) {
            res.status(400).json({ Message: "Username already in use" })
            return
        }
        const user = await newUser.save();
        const token = jwt.sign({ username: user.username, id: user._id }, process.env.JWT_KEY, { expiresIn: "1h" })
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const loginUsers = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username: username });
        if (user) {
            const validatePass = await bcrypt.compare(password, user.password);
            if (!validatePass) {
                res.status(400).json("Wrong password");
            } else {
                const token = jwt.sign({ username: user.username, id: user._id }, process.env.JWT_KEY, { expiresIn: "1h" })
                res.status(200).json({ user, token });
            }
        }
        else {
            res.status(404).json("User does not exist");
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
