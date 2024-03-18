import connectDB from "@/libs/mongodb";
import { ShipModel } from "@/models/ship";
import { NextResponse } from "next/server";


// Metodo GET para buscar barcos por matricula 
const GET = async (req, {params})=>{
    
    await connectDB();
    const registrationNumber = params.id
    
    try {
        
        const shipFound = await ShipModel.findOne({ registrationNumber: registrationNumber }); // Buscamos el Barco por su Matrícula
        
        if (!shipFound) return NextResponse.json({message:`La Matrícula ${registrationNumber} no existe`}, { status: 404 });
        else{
            return NextResponse.json({ data: shipFound }, { status: 200 }); 
         }

    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return NextResponse.json({ data: null }, { status: 500 });
    }
}

//Metodo DELETE para eliminar Registro por completo
const DELETE = async (req, { params }) => {
    await connectDB();
    const registrationNumber = params.id;
    console.log("numero de matricula a eliminar", registrationNumber);

    try {
        
        const shipRemoved = await ShipModel.findOneAndDelete({ registrationNumber: registrationNumber });
        
        if (!shipRemoved) return NextResponse.json({ message: `La Matrícula ${registrationNumber} no existe` }, { status: 404 });
        else {
            return NextResponse.json({ message: `La Matrícula ${registrationNumber} ha sido Eliminada Correctamente` }, { status: 200 });
        }
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return NextResponse.json({ data: null }, { status: 500 });
    }
};

//Metodo PUT para Actualizar Registro por completo
const PUT = async (request, { params }) => {
    await connectDB();
    const registrationNumber = params.id;
    const body = await request.json()
    console.log("numero de matricula a Actualizar", registrationNumber);
    console.log("lo enviado por body", body);
    try {
        
        const shipUpdate = await ShipModel.findOneAndUpdate(
            { registrationNumber: registrationNumber }, 
            { $set:{... body }}, 
            { new: true } //devuelve el documento actualizado
            );
        
        if (!shipUpdate) {
            return NextResponse.json({ message: `La Matrícula ${registrationNumber} no existe` }, { status: 404 });
        } else {
            return NextResponse.json({ data: shipUpdate }, { status: 200 });
        }
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return NextResponse.json({ data: null }, { status: 500 });
    }
};

module.exports = { GET, DELETE, PUT};

