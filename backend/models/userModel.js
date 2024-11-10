import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneno: { type: String, required: true }, // Changed to String for flexibility
    dob: { type: Date, required: true }, // Changed to Date for better handling
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { minimize: false });

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
