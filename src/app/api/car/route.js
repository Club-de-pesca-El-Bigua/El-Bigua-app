import connectDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { CarModel } from "@/models/cars";
import { UserModel } from "@/models/users";
import carSchemaValidate from "@/app/servervalidation/carValidate";

//Metodo POST para crear un Cars 
const POST  = async (req, res) => {

    await connectDB() //Establecemos conexion con la BD
    try {

        //Extraigo el ultimo valor de Model User para asignar al UserShip
        const lastUser = await UserModel.findOne({}, {}, { sort: { 'userNumber': -1 } });
        console.log("Ultimo numero de socio en BD", lastUser.userNumber);
        
        //Recibimos el body de la peticion en formato JSON
        const carbody = await req.json() 
        console.log("Esto es CardBody", carbody)

        
         //Validamos  el Schema de los datos recibidos
         const validaBody = await carSchemaValidate.validateAsync({
            ...carbody, 
            userNumber: lastUser.userNumber
        }) 

        // Crea la nuevo Cars en MongoDB
        const newCar = await CarModel.create({
            ...validaBody,
            userNumber: lastUser.userNumber,
            state: true  // como se le asigno un socio su estado cambia de false a true
        }); 

        // Cambiamos estado statecar a true ya que le asignamos un car 
        const lastUsercar = await UserModel.findOne({}, {}, { sort: { 'userNumber': -1 } });
        if (lastUsercar) {
            const userUpdate = await UserModel.findByIdAndUpdate(
                lastUser._id,
                { $set: { statecar: true } },
                { new: true } 
            );
            console.log("Actualizamos estado car", userUpdate.stateship)
        }

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