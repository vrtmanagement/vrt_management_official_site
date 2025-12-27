import mongoose from 'mongoose';

const egaWorkshopSchema = new mongoose.Schema({
    fullName: {
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
    },
    revenue: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
});

const EgaWorkshop = mongoose.models.EgaWorkshop || mongoose.model("EgaWorkshop", egaWorkshopSchema);
export default EgaWorkshop;