import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"


//app config
const app=express()
const port=4000

app.use(express.json())
app.use(cors())


//api endpoint
app.use("/api/user",userRouter)

//db connection 
connectDB();

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

