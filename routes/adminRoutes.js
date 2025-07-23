import express from "express";
import { deleteUserById, getAllUsers } from "../controllers/adminController.js";
import { verifyToken } from "../middleware/auth.js";
import { checkRole } from "../middleware/role.js";

const router = express.Router();
router.use(verifyToken, checkRole("admin"));
router.delete("/users/:id", deleteUserById);
router.get("/users", getAllUsers);

export default router;
