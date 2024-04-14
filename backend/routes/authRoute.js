import express from 'express';
import { User } from '../models/userModel.js';
import bcrypt from "bcrypt";

const router = express.Router();

router.post('/singup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUser = new User({
            email,
            password,
        });
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({
                status: "failed",
                data: [],
                message: "It seems you already have an account, please log in instead.",
            });
        const savedUser = await newUser.save(); 
        const { role, ...user_data } = savedUser._doc;
        res.status(200).json({
            status: "success",
            data: [user_data],
            message:
                "Thank you for registering with us. Your account has been successfully created.",
        });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });

router.post('/login', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email }).select("+password");
        if (!user)
            return res.status(401).json({
                status: "failed",
                data: [],
                message:
                    "Invalid email or password. Please try again with the correct credentials.",
            });
        const isPasswordValid = await bcrypt.compare(
            `${req.body.password}`,
            user.password
        );
        if (!isPasswordValid)
            return res.status(401).json({
                status: "failed",
                data: [],
                message:
                    "Invalid email or password. Please try again with the correct credentials.",
            })
            const { password, ...user_data } = user._doc;

        res.status(200).json({
            status: "success",
            data: [user_data],
            message: "You have successfully logged in.",
        });
        
    } catch (err) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
    res.end();
  });

export default router;