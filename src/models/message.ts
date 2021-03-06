import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  text: {
    required: true,
    type: String
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
