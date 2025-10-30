import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI || "";
if (!MONGODB_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

let cached = global.mongoose || (global.mongoose = { conn: null, promise: null });

const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false }).then((m) => m);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};

export default connectDB;