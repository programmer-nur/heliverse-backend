import mongoose from "mongoose";
import { Server } from "http";
import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./modules/users/user.route";
dotenv.config();
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

let server: Server;
async function main() {
  try {
    mongoose.connect(process.env.DATABASE_URL as string);

    console.log(`🛢   Database is connected successfully`);

    server = app.listen(process.env.PORT, () => {
      console.log(`Application  listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Failed to connect database", error);
  }
}

main();
