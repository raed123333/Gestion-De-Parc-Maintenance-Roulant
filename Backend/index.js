import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Port } from './config.js';
import {mongoDBURL} from './config.js';

const app = express();



mongoose.connect(mongoDBURL)
        .then(()=>{
                console.log('Connected to MongoDB...');
                app.listen(Port, () => console.log(`Server running on port ${Port}`));
 
        })
        .catch((error) => console.error(`Error connecting to MongoDB: ${error}`));






