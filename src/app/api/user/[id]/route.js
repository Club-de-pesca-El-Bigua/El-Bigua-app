import connectDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { UserModel } from "@/models/users";

//Metodo para buscar usuarios por Numero de Socio

const GET = async (res, {params}) =>{
    await connectDB()
    const userNumber = params.id
    console.log("esto es numero de Socio", userNumber)

    try {
        
        const userFind = await UserModel.findOne({userNumber:  userNumber});
        if (!userFind) return NextResponse.json({message: `Numero de Socio ${userNumber} no existe`}, {status :404})
        else{
            return NextResponse.json({data: userFind}, {status: 201})
        }
    } catch (error) {
        console.error("Error al procesar la solicitud", error)
        return NextResponse.json({data: null}, {status: 500})
    }
}

//Metodo para Eliminar Socio por Numero. 

const DELETE = async (res, {params}) => {
    await connectDB()
    const userNumber = params.id
    console.log("Estos es Numero de Socio", userNumber)

    try {
        const userDelete = await UserModel.findOneAndDelete({userNumber: userNumber})
        if (!userDelete) return NextResponse.json({message: `Numero de Socio ${userNumber}, no existe `}, {status:404})
        else{
            return NextResponse.json({message: `Usuario con Numero de Socio ${userNumber}, ha sido eliminado correctamente`}, {status:201})
        }
    } catch (error) {
        console.error("Error al procesar la Solicitud", error)
        return NextResponse.json({data: null}, {status: 500})
    }
}

//Metodo PUT para Actualizar Registro por completo
const PUT = async (request, { params }) => {
    await connectDB();
    const userNumber = params.id;
    const body = await request.json()
    console.log("numero de matricula a Actualizar", userNumber);
    console.log("lo enviado por body", body);
    try {
        
        const userUpdate = await UserModel.findOneAndUpdate(
            { userNumber: userNumber }, 
            { $set:{... body }}, 
            { new: true } //devuelve el documento actualizado
            );
        
        if (!userUpdate) return NextResponse.json({ message: `La Matrícula ${userUpdate} no existe` }, { status: 404 });
        else {
            return NextResponse.json({ data: userUpdate }, { status: 200 });
        }
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return NextResponse.json({ data: null }, { status: 500 });
    }
};

const getUser = async (userId) => {
    const user = await UserModel.findById(userId).populate("shipIds").populate("carIds");
  
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
  
    return user;
  };

module.exports = {GET, DELETE, PUT, getUser}