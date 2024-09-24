import express from "express";
import { loginController, registerController } from "../controllers/user";

const router = express.Router();

router.post('/login', loginController)

router.post('/register', registerController)

export default router;