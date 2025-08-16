import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import lawyerRouter from "./routes/lawyerRoute.js"
import adminRouter from "./routes/adminRoute.js"
import { v2 as cloudinary } from 'cloudinary'
import { startSession } from "mongoose"

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// Cloudinary test
cloudinary.api
  .ping()
  .then(() => console.log('Cloudinary connected ✅'))
  .catch((err) => console.error('Cloudinary error ❌', err));

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/lawyer", lawyerRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))