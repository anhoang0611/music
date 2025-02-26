import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderID: { type: String, required: true }, //clerk userid
    receiverID: { type: String, required: true }, //clerk userid
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);
