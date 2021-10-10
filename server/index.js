import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import fileRoutes from "./routes/files.js";
import auth from "./routes/auth.js";
import env from "dotenv"; 
const app = express();


// environmental variables
env.config();
const PASSWORD = process.env.PASSWORD;
//
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/file", fileRoutes);
app.use("/auth", auth);
const CONNECTION_URL =
  `mongodb+srv://shriyabhadada:${PASSWORD}@cluster0.d1ove.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server runnng on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
