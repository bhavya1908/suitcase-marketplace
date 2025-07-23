import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String },
  role: { type: String, enum: ["admin", "seller", "buyer"], default: "admin" },
  otp: { type: String },
  otpExpires: { type: Date },
  isVerified: { type: Boolean, default: false },
});

export const User = mongoose.model("User", userSchema);
