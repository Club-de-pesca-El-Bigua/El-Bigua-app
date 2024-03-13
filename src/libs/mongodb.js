import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('Mongoose is connected');
        console.log("######################");
        console.log("###### API REST ######");
        console.log("######################");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error; // Relanzar el error para que pueda ser manejado en el contexto superior
    }
};

export default connectDB;











//CONEXION ORIGINAL 
// import {connect, connection} from 'mongoose';
// require('dotenv').config();
// //conection db
// import DB_URI  from './db.config'

// export const conn = {
//     isConnected: false
// };

// const {DB_URI} = process.env;
// export async function connectDB(){
//     if(conn.isConnected) return;
//         const db = await connect(DB_URI);
//         conn.isConnected = db.connections[0].readyState;

//     connection.on('connected', () => {
//         console.log('Mongoose is connected');
//         console.log("######################");
//         console.log("###### API REST ######");
//         console.log("######################");
//     });

//     connection.on('error', (err) => {
//         console.log('Mongoose conection error', err);
//     });
    
// };