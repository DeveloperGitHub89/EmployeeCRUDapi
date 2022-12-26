import express from 'express';
import 'dotenv/config';
import { configureDb } from './src/configs/DbConfig.js';
import employeeRouter from './src/routers/EmployeeRouter.js';

const app = express();
app.use(express.json())
app.use(employeeRouter);
app.listen(process.env.SERVER_PORT, ()=>{
    configureDb();
    console.log(`listening on port ${process.env.SERVER_PORT}`);
});