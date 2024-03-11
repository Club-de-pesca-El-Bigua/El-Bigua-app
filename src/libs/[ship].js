import { connectDB, conn } from "./mongodb"
import ship from "@/models/ship";
import { findOrCreateModel } from "./dbmethods";


// Metodo para Crear  un barco en la BD si no existe o devolver el que ya existe.

const createship = async (req, res) => {
    try {

        if(!conn.isConnected) connectDB(); // Validamos la Conexion con la BD 
        console.log("Esto llega por Body", req.body) // Valido lo que llega por Body 
        const newShip = await ship.create(req.body); //  Crea la nueva embarcacion en MongoDB
        console.log("New Ship: ",newShip);  //  Lo imprimimos para ver el resultado de crearla
        res.status(201).json({ id : newShip._id }); //   Retornamos un Status HTTP 201 y enviamos el ID de la Nueva Embarcacion

    } catch (error) {
        return res.status(400).send({ 
            error: 'Error al Crear Nueva Embarcación'
        });
    }
    res.status(201).send({
        message:'Nueva Embarcación Creada',
        data: newShip
    })
}

// Metodo para obtener todas las barcos registradas en la DB

const getAllships = async (req, res)=>{
     try{
          if(!conn.isConnected) connectDB(); // Validamos la Conexion con la BD 
          const ships=await ship.find()
           .sort('name')   // Ordenamos los resultados por nombre
           .select('name type length -_id'); // Seleccionamos solo Name y Type, quitando _id
      
          // Retornamos una Respuesta Estandar
          return res.status(200).json({
            count : ships.length,
            pages : Math.ceil(ships.length / 5),
            ships : ships.slice((req.query.page-1)*5, req.query.page*5 )
          })
      }catch(e){
        console.log(e)
      }
};

//metodo para buscar barcos por matricula 
const gethByregisNum=(req,res )=> {
    const registrationNumber = req.params.registrationNumber;
    try {
        if(!conn.isConnected) connectDB(); // Validamos la Conexion con la BD 
        const shipFound=ship.findOne({registrationNumber:registrationNumber});
        if (!shipFound) {
            return res.status(404).send({message:`La Matrícula ${registrationNumber} no existe`})
        }else{
             return res.status(200).send(shipFound);
         }

    } catch (error) {
            console.log(error)
            return res.status(500).send({message:"Error al realizar la consulta"})
    }
}

//metodo para actualizar un barco por  su ID
const updateShipById =async (req,res) =>{

    const registrationNumber = req.params.registrationNumber;
    console.log("esto es la MAtricula que recibo por params", registrationNumber)

        try {
            if(!conn.isConnected) connectDB(); // Validamos la Conexion con la BD
            conn.validate(updates); // Verificamos que el cuerpo de la peticion tenga todos los campos requeridos
        
            const ship =  await ship.findByPk(registrationNumber); // Buscamos el Barco a Actualizar por su ID en la BD
            if(!ship)  return res.status(404).send({ message: "Barco no encontrado." });
            
            await ship.uddate(req.body, {where: {registrationNumber: registrationNumber}})
            const  shipUpdated =await Ship.findOne({ where: {registrationNumber: registrationNumber}});
            return res.status(200).send({ship : shipUpdated});

        } catch (error) {
            console.log(firstError(error));
            return res.status(500).send({
                status: "failed",
                message: "Error en el servidor.",
            })
            
        }
};
// Metodo para eliminar  un Barco por su ID (Borrado Logico)
const deleteShip = async (req, res) => {
    const registrationNumber = req.params.registrationNumber;
    try {
        if(!conn.isConnected) connectDB(); // Validamos la Conexion con la BD
        conn.validate(updates); // Verificamos que el cuerpo de la peticion tenga todos los campos requeridos
        const ship =  await ship.findByPk(registrationNumber); // Buscamos el Barco a Actualizar por su ID en la BD
        if(!ship)  return res.status(404).send({ message: "Barco no encontrado." });
        
        await ship.uddate(req.body, {where: {registrationNumber: registrationNumber}})
        const  shipUpdated =await Ship.findOne({ where: {registrationNumber: registrationNumber}});
        return res.status(200).send({ship : shipUpdated});

    } catch (error) {
        console.log(firstError(error));
        return res.status(500).send({
            status: "failed",
            message: "Error en el servidor.",
        })
        
    }
    }
module.exports={createship,getAllships, gethByregisNum,updateShipById};


/*
datos a crear en la BD 
   {
  "registrationNumber": "AR-123456",
  "dueDate": "15-12-2024",
  "type": "Lancha Rapida",
  "color": "Blanco-Gris",
  "capacity": "10 Personas",
  "brand": "Beneteau",
  "hp": "300 Hp",
  "fantasyName": "Mar Azul",
  "insurer": "Zurich",
  "dueDateInsurance": "21-09-2025",
  "info": "Papeles en Regla"
}
*/




