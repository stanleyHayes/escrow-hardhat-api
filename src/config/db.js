import mongoose from "mongoose";
import {MONGODB_URI} from "./keys.js";
const connectDB = async () => {
    try{
        const value = await mongoose.connect(MONGODB_URI);
        console.log(`Connected to MongoDB on host ${value.connection.host}`);
    }catch (e) {
        console.log(e.message);
    }
}

export {connectDB};