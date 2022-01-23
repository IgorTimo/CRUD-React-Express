import express from "express";
import mongoose from "mongoose";
import cors from "cors"; //убираем has been blocked by CORS policy
import { routes } from "./config/routes.js";


await mongoose.connect("mongodb://localhost/crud");

export const TOKEN_SECRET='09f26e402586e2faa8da4c98';

const app = express();
app.use(express.json()); //убираем ошибку, кода res undefined
app.use(express.urlencoded()); //убираем ошибку, кода res undefined
app.use(cors()); //убираем has been blocked by CORS policy
app.use("/", routes)



const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Listening on port ${port}`));
