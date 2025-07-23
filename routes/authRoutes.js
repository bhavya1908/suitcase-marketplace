import express from "express";
import {
  register,
  verifyOtp,
  resendOtp,
  login,
} from "../controllers/authController.js";
import { verifyToken } from "../middleware/auth.js";
import { checkRole } from "../middleware/role.js";

const router = express.Router();

router.post("/signup", register);
router.post("/verify", verifyOtp);
router.post("/resend-otp", resendOtp);
router.post("/login", verifyToken, checkRole, login);

export default router;
