import mongoose from "mongoose";

const formTriMetrixSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    numberOfEmployees: {
      type: String,
      required: true,
      trim: true,
    },
    revenue: {
      type: String,
      required: false,
      trim: true,
    },
    emailSent: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const FormTriMetrix = mongoose.models.FormTriMetrix || mongoose.model("FormTriMetrix", formTriMetrixSchema);
export default FormTriMetrix;

