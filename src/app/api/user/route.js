import connectDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { UserModel } from "@/models/users";
import userSchemaValidate from "@/app/servervalidation/userValidate";

//METODOS DE CREACION Y BUSCAR UN CAR

// Metodo PUT para crear user
const POST = async (req, res) =>{

    await connectDB();
    try {
        const body = await req.json();
        console.log("Esto llega del body", body);

        const bodyValidate = await userSchemaValidate.validateAsync(body);

        const newUser = await UserModel.create(bodyValidate)
        console.log("esto es lo creado en BD", newUser)

        return NextResponse.json( {data:newUser} , { status:201 } ) 
         // Devuelve la inform
    } catch (error) {
        console.error("Error al crear el Usuario", error);

        // Verificar si el error es de validación de Joi
        if (error.isJoi) {
            // Construir un mensaje detallado de error de validación
            const errorMessage = error.details.map(detail => detail.message).join(', ');
            return NextResponse.json({ error: errorMessage }, { status: 400 });
        }

        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
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