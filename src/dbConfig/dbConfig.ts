import { error } from "console";
import mongoose from "mongoose";


export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connceted', ()=> {
            console.log("MongoDB Connected"); 
        })

        connection.on('error', (err) =>{
            console.log('Mongodb connection error, please make sure db is running' + err);
            process.exit()
        })


    } catch (error) {
         console.log("Something went Wrong in Connecting to DB");
    console.log(error);
    }
   
}