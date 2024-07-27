
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from './routes/auth.js'
import otpRoutes from './routes/otpRoutes.js'

dotenv.config();

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: "true" }));
const corsOptions = {
    origin: process.env.CLIENT_URL, // Replace with your front-end URL
    credentials: true,
};
app.use(cors(corsOptions));

app.use('/auth',authRoutes)
app.use('/otp',otpRoutes)


app.get("/", (req, res) => {
    res.send("Welcome to foodie-listing API's");
});

const PORT = process.env.PORT || 8081;
const DATABASE_URL = process.env.DATABASE_URL;
console.log("DBURL", DATABASE_URL);
console.log("PORT", PORT);

mongoose
    .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        app.listen(PORT, () => {
            console.log(`server running on PORT ${PORT}`);
        })
    )
    .catch((err) => console.log(err));
