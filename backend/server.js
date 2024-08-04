import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());


app.use(cors({
  origin: 'http://localhost:3000', // Replace with your actual frontend URL
  credentials: true, // Enable credentials to be sent
}));


app.use("/api/auth", authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);


server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
