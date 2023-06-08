import cors from "cors";
import express from "express";
import { config } from "dotenv";
import routes from "./routes.js";
import mongoose from "mongoose"
config();

const app = express();
app.use(cors());
app.use("/", routes);

mongoose
  .connect(`${uri}`)
  .then(() => {
    console.log("connecté a MongoDB");
    app.listen(PORT, () => {
      console.log(`bien connecté sur le port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
