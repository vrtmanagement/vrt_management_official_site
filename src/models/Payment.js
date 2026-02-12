import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    formId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "FormEGA",
    },
    email: {
      type: String,
      required: true,
    },
    amount: {
      type: Number, // paise
      required: true,
    },
    currency: {
      type: String,
      default: "inr",
    },
    stripeSessionId: {
      type: String,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Payment ||
  mongoose.model("Payment", PaymentSchema);
