import mongoose from "mongoose"

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://bkiransirsi:bkiransirsi12345@cluster0.0inb8.mongodb.net/Hackathon').then(()=>console.log("DB Connected"));
}