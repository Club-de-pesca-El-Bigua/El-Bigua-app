import connectDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { CarModel } from "@/models/cars";


// Metodo GET para buscar auto por patente o placa

const GET = async (req, {params}) => {
    await connectDB()
    const plate = params.id

    try {
        // Buscamos el coche en la base de datos por su placa
        const carFound = await CarModel.findOne({plate: plate}); 
        if (!carFound) return NextResponse.json({message: `La Placa o patente, ${carFound} no se encuentra registrada`})  
        else {
            return NextResponse.json({ data: carFound }, { status: 200 });
        
        }   
        
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return NextResponse.json({ data: null }, { status: 500 });
    }
}

//Metodo DELETE  para eliminar un coche de la BD
const DELETE = async (req, {params}) =>{
    await connectDB()
    const  plate = params.id;
    console.log("Patente a eliminar", plate);
    try {
            const carRemove = await CarModel.findOneAndDelete({plate: plate});
            if  (!carRemove) return NextResponse.json ({message: `La placa o patente ${carRemove} para eliminar no esta registrada`}, { status: 404 })
            else {
                console.log("patente Eliminada",  carRemove)
                return NextResponse.json({ message: `La Matrícula ${plate} ha sido Eliminada Correctamente` }, { status: 200 });
            }
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return NextResponse.json({ data: null }, { status: 500 });
    }
    
}


// Metodo PUT  actualizar los campos del coche que se le pasan como parametros
const PUT = async (request, { params }) => {
    await connectDB();
    const plate = params.id;
    const body = await request.json()
    console.log("numero de matricula a Actualizar", plate);
    console.log("lo enviado por body", body);
    try {
        
        const carUpdate = await CarModel.findOneAndUpdate(
            { plate: plate }, 
            { $set:{... body }}, 
            { new: true } //devuelve el documento actualizado
            );
        
        if (!carUpdate) {
            return NextResponse.json({ message: `La Matrícula ${carUpdate} no existe` }, { status: 404 });
        } else {
            return NextResponse.json({ data: carUpdate }, { status: 200 });
        }
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return NextResponse.json({ data: null }, { status: 500 });
    }
};

module.exports = {GET, DELETE, PUT}