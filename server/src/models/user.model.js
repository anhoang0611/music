import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    imageUrl: { type: String, required: true },
    clerkid: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
// creaAt and UpAt
export const User = mongoose.model("User", userSchema);
