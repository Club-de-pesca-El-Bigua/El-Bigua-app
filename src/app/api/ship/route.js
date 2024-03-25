import connectDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { ShipModel } from "@/models/ship";
import { UserModel } from "@/models/users";
import shipSchemaValidate from "@/app/servervalidation/shipValidate";

// Método POST para Crear un barco en la BD si no existe
const POST = async (req, res) => {
    await connectDB(); // validamos conexion con BD
    try {
        //Extraigo el ultimo valor de Model User para asignar al UserShip
        const lastUser = await UserModel.findOne({}, {}, { sort: { 'userNumber': -1 } });
        console.log("Ultimo numero de socio en BD", lastUser.userNumber);
     
        const body = await req.json();
        console.log("Esto llega por Body", body); // Validar lo que llega por Body
        
        
        //Validamos  el Schema de los datos recibidos
        const validaBody = await shipSchemaValidate.validateAsync({
            ...body, 
            userNumber: lastUser.userNumber
        }) 

        // Crea la nueva embarcacion en MongoDB
        const newShip = await ShipModel.create({
            ...validaBody,
            userNumber: lastUser.userNumber,
            state: true  // como se le asigno un socio su estado cambia de false a true
        }); 
        
        // Cambiamos estado stateship a true ya que le asignamos un Ship 
        const lastUsercar = await UserModel.findOne({}, {}, { sort: { 'userNumber': -1 } });
        if (lastUsercar) {
            const userUpdate = await UserModel.findByIdAndUpdate(
                lastUser._id,
                { $set: { stateship: true } },
                { new: true } 
            );
            console.log("Actualizamos estado car", userUpdate.stateship)
        }
        console.log("New Ship Creado ", newShip); // Imprimir para ver el resultado de crearla
         return NextResponse.json({ data: newShip}, { status: 201 }); 
       // Retornar un Status HTTP 201 y enviar el ID de la Nueva Embarcacion

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