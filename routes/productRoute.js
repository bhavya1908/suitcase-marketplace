import express from "express";
import {
  addProduct,
  getSellerProducts,
  markProductSold,
} from "../controllers/productController.js";
import { verifyToken } from "../middleware/auth.js";
import { checkRole } from "../middleware/role.js";

const router = express.Router();

router.use(verifyToken, checkRole("seller"));

router.post("/products", addProduct);
router.get("/products", getSellerProducts);
router.patch("/products/:id", markProductSold);

export default router;
