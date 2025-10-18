import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
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
    type: String
  },
  website: {
    type: String,
  },
});

// Check if the model already exists, if not create it
// Force recreation of model to ensure schema changes take effect
if (mongoose.models.FormEGA) {
  delete mongoose.models.FormEGA;
}
const FormEGA = mongoose.model("FormEGA", formSchema);

export default FormEGA;