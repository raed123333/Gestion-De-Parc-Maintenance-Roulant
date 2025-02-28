import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Port, mongoDBURL } from "./config.js";
import RequestRepair from "./Routes/RequestRepair.js";
import MaintenancePlan from "./Routes/MaintenancePlan.js";
import DriverPanel from "./Routes/DriverPanel.js";
import cookieParser from "cookie-parser";
import AdminPanel from "./Routes/AdminPanel.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ["https://deploy-mern-1whq.vercel.app"],
  methods:["POST","GET","PUT","DELETE"],
  credentials: true,
}));

// Routes
app.use("/requestrepair", RequestRepair);
app.use("/maintenancePlan", MaintenancePlan);
app.use("/driver", DriverPanel);
app.use("/admin", AdminPanel);

// MongoDB connection and server start
mongoose.connect(mongoDBURL)
        .then(()=>{
                console.log('Connected to MongoDB...');
                app.listen(Port, () => console.log(`Server running on port ${Port}`));
 
        })
        .catch((error) => console.error(`Error connecting to MongoDB: ${error}`));
