import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";  // Make sure your DB connection is working correctly
import userRouter from "./routes/userRoute.js";  // Ensure that userRoute.js is set up properly
import "dotenv/config";  // Ensure the environment variables are loaded

// Initialize the app
const app = express();
const port = 4000;

// Use CORS and JSON middleware
app.use(express.json());
app.use(cors({
    origin: [
        'http://localhost:3000', // Local dev environment
        'https://3486-2405-201-d02f-d003-d4ad-d2e2-792c-c8b9.ngrok-free.app',// Your Ngrok URL
        'http://localhost:5173','http://192.168.29.220:5173'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));


// Define the API endpoints
app.use("/api/user", userRouter);

// Connect to the database
connectDB();

// Test route
app.get("/", (req, res) => {
    res.send("API working");
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
