import cors from "cors";
import express from "express";
import { config } from "dotenv";
import routes from "./routes.js";
import mongoose from "mongoose"
const PORT = 4000
config();

const app = express();
app.use(express.json())
app.use(cors());


app.use("/", routes);


const uri = "mongodb+srv://coudadm:JP668pQ8mw3YukPH@test.vxjcz1t.mongodb.net/?retryWrites=true&w=majority"
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
