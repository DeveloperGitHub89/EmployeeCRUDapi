import 'dotenv/config';
import mongoose from 'mongoose';

export async function configureDb() {
    try {
       await mongoose.connect(process.env.DB_URL)
       console.log("Db Connected !");
    } catch (error) {
        console.log(error);
    }
    
}