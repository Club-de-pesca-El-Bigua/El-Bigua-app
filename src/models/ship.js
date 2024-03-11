const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate"); // proporciona funcionalidad de paginacion en mongoDB de datos grandes
const { boolean } = require("yup");

//modelo de embarcacion

const  ShipSchema = new mongoose.Schema
({
    registrationNumber  : { type: Number, required: true, }, // Número  de matricula
    dueDate             : { type: Date, required: true }, // Vencimiento matricula
    type                : { type: String , required: true }, // Tipo de Embarcacion 
    color               : {type:String, required: true},   // Color
    capacity            : { type: Number, required: true }, // Capacidad 
    brand               : { type: String, required: true } , // Marca
    hp                  : { type: Number, required: true} , // HP o Potencia
    fantasyName         : { type: String, required: true }, // Nombre Fantasia
    insurer             : { type: String, required: true }, //Nombre del aseguradora
    dueDateInsurance    : { type: Date, required: true }, // Fecha de Vencimiento del Seguro
    info                : { type: String, required: true  }, // Informacion adicional
    state               : { type: Boolean, defaultValue: true  }, // Para validar activo o desactivo Borrado Logico
});

    EmbarcaSchema.plugin(mongoosePaginate);

    module.exports= mongoose.model('Ship', ShipSchema) ;

















  





