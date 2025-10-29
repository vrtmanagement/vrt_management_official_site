import mongoose from "mongoose";

const formLbanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  numberOfEmployees: {
    type: String,
    required: true,
  },
  emailSent:{
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true, // This adds createdAt and updatedAt fields automatically
});


const FormLban = mongoose.model("FormLban", formLbanSchema);

export default FormLban;
