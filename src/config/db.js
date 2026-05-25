import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI || "";
if (!MONGODB_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

const CONNECT_RETRY_COOLDOWN_MS = 30_000;

let cached =
  global.mongoose ||
  (global.mongoose = {
    conn: null,
    promise: null,
    lastError: null,
    lastErrorAt: 0,
  });

const connectDB = async () => {
  if (cached.conn) return cached.conn;

  const now = Date.now();
  if (
    cached.lastError &&
    now - cached.lastErrorAt < CONNECT_RETRY_COOLDOWN_MS
  ) {
    throw cached.lastError;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((m) => {
        cached.lastError = null;
        cached.lastErrorAt = 0;
        return m;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    cached.lastError = e;
    cached.lastErrorAt = Date.now();
    throw e;
  }

  return cached.conn;
};

export default connectDB;
