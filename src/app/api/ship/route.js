import connectDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { ShipModel } from "@/models/ship";

// Método POST para Crear un barco en la BD si no existe
const POST = async (req, res) => {
    await connectDB();
    try {
     
        const body = await req.json();
        
        console.log("Esto llega por Body", body); // Validar lo que llega por Body
        
        const newShip = await ShipModel.create(body); // Crea la nueva embarcacion en MongoDB
        console.log("New Ship Creado ", newShip); // Imprimir para ver el resultado de crearla
         return NextResponse.json({ data: newShip }, { status: 201 }); 
       // Retornar un Status HTTP 201 y enviar el ID de la Nueva Embarcacion

    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return NextResponse.json({ data: null }, { status: 500 });
    } 
};

// Metodo GET para buscar todo los  Barcos en la BD
const GET = async (req, res)=>{
        await connectDB();
        try{
              //if(!conn.isConnected) connectDB(); // Validamos la Conexion con la BD 
              const result = await ShipModel.find()
               //.sort('name')   // Ordenamos los resultados por nombre
               //.select('name type length -_id'); // Seleccionamos solo Name y Type, quitando _id
          
              // Retornamos una Respuesta Estandar
              return NextResponse.json({ data: result }, { status: 200 })
              
        } catch (error) {
                console.error("Error al procesar la solicitud:", error);
                return NextResponse.json({ data: null }, { status: 500 });
        } 
};

module.exports = {POST, GET};