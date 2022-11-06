import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";

import { errorHandler } from "./middleware/error_handler.js";

import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoute.js"
import userRoutes from "./routes/userRoute.js"
import collabRoutes from "./routes/collabRoute.js"

const app = express()

const __dirname = path.resolve();

dotenv.config({path: "./config/config.env"})

connectDB().then()


app.use(morgan("dev"))

app.use(express.json())

app.use(cors())

app.use("/public", express.static(path.join(__dirname, "public")))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/api/admin", adminRoutes)
app.use("/api/users", userRoutes)
app.use("/api/collab", collabRoutes)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server starting at PORT ${PORT}`)
})