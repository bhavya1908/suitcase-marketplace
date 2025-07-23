// controllers/orderController.js
import Order from "../models/order.js";
import { Product } from "../models/Product.js";

export const placeOrder = async (req, res) => {
  try {
    const { product, paymentMethod } = req.body;

    const existingProduct = await Product.findById(product);
    if (!existingProduct)
      return res.status(404).json({ message: "Product not found" });

    const order = await Order.create({
      buyer: req.user._id,
      product,
      paymentMethod,
    });

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to place order", error: err.message });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.user._id }).populate(
      "product"
    );
    res.status(200).json(orders);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch orders", error: err.message });
  }
};
