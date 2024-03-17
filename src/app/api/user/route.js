import connectDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { UserModel } from "@/models/users";

//METODOS DE CREACION Y BUSCAR UN CAR

// Metodo PUT para crear user
const POST = async (req, res) =>{

    await connectDB()
    try {
        const body = await req.json()
        console.log("Esto llega del body", body)

        const newUser = await UserModel.create(body)
        console.log("esto es lo creado en BD", newUser)

        return NextResponse.json( {data:newUser} , { status:201 } ) 
         // Devuelve la inform
    } catch (error) {
        console.error("Error al crear el Usuario", error)
        return NextResponse.json({ data: null }, { status:500  })  
    }
}

//Metodo GET para buscar todos los Usuarios

const GET = async (req, res) =>{
    
    await connectDB()
    try {
        const userFind = await UserModel.find()
        
        return NextResponse.json({ data: userFind }, { status:200 })
        
    } catch (error) {
        console.error("Error en la busqueda de usuarios", error)
        return NextResponse.json({data: null}, {status:500})
    }
}

module.exports = { POST, GET }