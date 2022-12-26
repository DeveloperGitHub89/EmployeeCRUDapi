import { StatusCodes } from "http-status-codes";
import { EmployeeModel } from "../models/EmployeeModel.js";

export async function saveEmployee(request,response){
    try {
        const emp=new EmployeeModel(request.body);
        const e=await emp.save();
        response.status(StatusCodes.CREATED).json(e);
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}