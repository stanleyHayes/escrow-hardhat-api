import express from "express";
import cors from "cors";
import helmet from "helmet";
import {connectDB} from "./config/db.js";
import escrowRouter from "./routes/escrows.js";
import {NODE_ENV, PORT} from "./config/keys.js";

const app = express();

connectDB().then(() => {});
app.use(express.json({limit: "5mb"}));
app.use(cors());
app.use(helmet());
app.use("/api/escrows", escrowRouter);

app.listen(PORT, () => {
    console.log(`Connected to MongoDB in ${NODE_ENV} mode on port ${PORT}`);
});