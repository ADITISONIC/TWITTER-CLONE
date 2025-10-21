import mongoose from "mongoose"
import { ENV } from "./env.js"

export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI)
        console.log("Connected to db successfully")
    } catch (error) {
        console.log("Error conecting")
        process.exit(1)
    }
}