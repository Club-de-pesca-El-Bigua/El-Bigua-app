import connectDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { UserModel } from "@/models/users";
import { ShipModel } from "@/models/ship";
import { CarModel } from "@/models/cars";
import userSchemaValidate from "@/app/servervalidation/userValidate";
import getLastUserNumber  from "@/app/api/user/lastUserNumber"



//METODOS DE CREACION Y BUSCAR UN CAR

// Metodo POST para crear user
const POST = async (req, res) =>{
    await connectDB();

    try {
        let newUser;

        while (!newUser) {
            //Creo procedimiento para validar ultimo socio creado si esta completamente registrado

            // Consulto el ultimo  usuario registrado y obtengo su numero de Socio
            const lastUser = await UserModel.findOne({}, {}, { sort: { 'userNumber': -1 } });
            console.log("Ultimo numero de socio en BD User es: ", lastUser.userNumber);          
       
            if(lastUser && lastUser.statecar===true && lastUser.stateship === true) {
                
                const lastUserNumber = await  getLastUserNumber() 
                console.log("Esto es el nuevo numero de socio Asignado",lastUserNumber)
                
                const body = await req.json();
                console.log("Esto llega del body", body);
        
                const bodyValidate = await userSchemaValidate.validateAsync(body);
        
                const newUser = await UserModel.create({
                    ...bodyValidate,
                   userNumber: lastUserNumber 
                  });
                  console.log("esto es lo creado en BD", newUser)
        
                  return NextResponse.json( {data:newUser} , { status:201 } ) 
                  // Devuelve la inform
                
            } else {
                // Si las validaciones no se cumplen, eliminamos el último usuario
                if (lastUser && lastUser.statecar === false || lastUser.stateship === false ) {
                    const Removeduser = await UserModel.findOneAndDelete({ userNumber: lastUser.userNumber });
                    console.log(`El último usuario creado ${Removeduser} se eliminó debido a que no completó los datos de Car y Ship`);
                    const Removedcar = await CarModel.findOneAndDelete({ userNumber: lastUser.userNumber });
                    console.log(`El último car creado ${Removedcar} se eliminó debido a que no completó los datos de Ship`);
                    const Removedship = await ShipModel.findOneAndDelete({ userNumber: lastUser.userNumber });
                    console.log(`El último ship creado ${Removedship} se eliminó debido a que no completó los datos de Car`);
                }  
            }
        }
        
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