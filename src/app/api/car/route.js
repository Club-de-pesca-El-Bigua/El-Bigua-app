import connectDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { CarModel } from "@/models/cars";

//Metodo POST para crear un Cars 
const POST  = async (req, res) => {

    await connectDB() //Establecemos conexion con la BD
    try {
        const carbody = await req.json() //Recibimos el body de la peticion en formato JSON
        console.log("Esto es CardBody", carbody)

        //Validamos que el body no este vacio
        if (!carbody){
            return NextResponse.json({ status:400 ,statusText:"Bad Request"})
        }
        
        const newCar = await CarModel.create(carbody); // Creamos una instancia del modelo y lo
        console.log("Esto es Nuevo Car en BD", newCar)
        return NextResponse.json( {data:newCar}, {status:201 } )
        
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return NextResponse.json({ data: null }, { status: 500 });     
    }
}

// Metodo GET para buscar Todos los Autos 
const GET = async (req, res) =>{
    await connectDB();
    try {
        const result = await CarModel.find()
        return  NextResponse.json({data:result},  {status:200});
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return NextResponse.json({ data: null }, { status: 500 }); 
    }
}

module.exports = { POST, GET }