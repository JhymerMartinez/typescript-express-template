import mongoose from "mongoose";

import Message from "./message";
import User from "./user";

const connectDb = (callback: any) => {
  return mongoose.connect(
    process.env.MONGOLAB_URI || "mongodb://localhost:27017/template-db",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
    },
    callback
  );
};

const models = { User, Message };

export { connectDb };

export default models;
