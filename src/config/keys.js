import dotenv from "dotenv";
dotenv.config();

const {MONGODB_URI, PORT, NODE_ENV} = process.env;

export {MONGODB_URI, PORT, NODE_ENV};