import { RequestHandler } from "express";
import userModel from "./user.model";

const loginController: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("user not found");
    }
    res.status(200).send({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error,
    });
  }
};

const registerController: RequestHandler = async (req, res) => {
  try {
    const {email} = req.body;
    const existingUser = await userModel.findOne({email})
    if(existingUser){
      return res.status(400).send({
        success: false,
        error : "Email already exists. Please choose a unique email address."
      })
    }
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({
        success: true,
        newUser,
      });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error,
    });
  }
};

export { loginController, registerController };
