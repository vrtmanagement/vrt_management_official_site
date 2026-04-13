import mongoose from "mongoose";

const siteScheduleSchema = new mongoose.Schema(
  {
    singletonKey: {
      type: String,
      default: "default",
      unique: true,
      index: true,
    },
    ega: { type: mongoose.Schema.Types.Mixed },
    ee: { type: mongoose.Schema.Types.Mixed },
    home: { type: mongoose.Schema.Types.Mixed },
    sog: { type: mongoose.Schema.Types.Mixed },
  },
  { timestamps: true }
);

const SiteSchedule =
  mongoose.models.SiteSchedule ||
  mongoose.model("SiteSchedule", siteScheduleSchema);

export default SiteSchedule;
