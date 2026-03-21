import mongoose from "mongoose";

const leadershipFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 40,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 40,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 40,
    },
    numberOfEmployees: {
      type: String,
      required: true,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
      default: "",
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

const LeadershipForm =
  mongoose.models.LeadershipForm ||
  mongoose.model("LeadershipForm", leadershipFormSchema);

export default LeadershipForm;
