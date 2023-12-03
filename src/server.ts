import mongoose from "mongoose";
import { Server } from "http";
import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRoutes } from "./modules/users/user.route";
import { TeamRoutes } from "./modules/team/team.route";
dotenv.config();
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/team", TeamRoutes);

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
