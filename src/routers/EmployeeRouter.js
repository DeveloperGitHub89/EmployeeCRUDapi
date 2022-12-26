import express from 'express';
import { saveEmployee } from '../controllers/EmployeeController.js';

const employeeRouter=express.Router();

employeeRouter.post('/employees',saveEmployee)

export default employeeRouter;