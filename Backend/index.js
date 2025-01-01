import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Port } from './config.js';
import {mongoDBURL} from './config.js';
import RequestRepair from './Routes/RequestRepair.js';
import MaintenancePlan from './Routes/MaintenancePlan.js';

const app = express();
//middleware for parsing requests body 
app.use(express.json());


app.use(cors());

//just for test backend 
/*app.get('/',(req,res) => {
        console.log(req);
        return res.status(234).send("harbi weld el coba");
})*/



app.use('/requestrepair', RequestRepair);
app.use('/maintenancePlan', MaintenancePlan);



mongoose.connect(mongoDBURL)
        .then(()=>{
                console.log('Connected to MongoDB...');
                app.listen(Port, () => console.log(`Server running on port ${Port}`));
 
        })
        .catch((error) => console.error(`Error connecting to MongoDB: ${error}`));






