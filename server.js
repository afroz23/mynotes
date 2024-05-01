import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from './config/db.js';

import noteRoutes from "./routes/noteRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/notes', noteRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
	res.send('API is running..');
});
  

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`
  )
);
