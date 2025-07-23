// routes/orderRoutes.js
import express from "express";
import { placeOrder, getMyOrders } from "../controllers/orderController.js";
import { verifyToken } from "../middleware/auth.js";
import { checkRole } from "../middleware/role.js";

const router = express.Router();
router.use(verifyToken, checkRole("buyer"));

router.post("/", placeOrder);
router.get("/", getMyOrders);

export default router;
