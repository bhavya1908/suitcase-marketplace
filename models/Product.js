// models/Product.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    seller: { type: Schema.Types.ObjectId, ref: "User", required: true },
    height: { type: Number, required: true },
    width: { type: Number, required: true },
    material: { type: String, required: true },
    rate: { type: Number, required: true },
    stock: { type: Number, required: true },
    isSold: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
