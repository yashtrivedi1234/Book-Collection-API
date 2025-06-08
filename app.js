import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import bookRoutes from "./Routes/bookRoutes.js";
import cors from "cors";
dotenv.config();
connectDB();

const app = express();
// Enable CORS for all origins
app.use(cors());

app.use(express.json());

app.use("/api/books", bookRoutes);

export default app;
