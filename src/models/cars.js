import mongoose from "mongoose";

//const mongoosePaginate = require("mongoose-paginate"); // proporciona funcionalidad de paginacion en mongoDB de datos grandes

//modelo de carro o remolque
const carSchema = mongoose.Schema({
    plate     : { type: String, required: [true, "Please complete the field"] },  //placa-patente del vehiculo
    carBrand  : { type: String, required: [true, "Please complete the field"] },  //marca del vehiculo
    year      : { type: String, required: [true, "Please complete the field"] },   //modelo del vehiculo
    carColor  : { type: String, required: [true, "Please complete the field"] },    //color del vehiculo
    infoCar   : { type: String, required: [true, "Please complete the field"] },    //informacion adicional 
    state     : { type: Boolean, default: [true, "Please complete the field"] }, // Cambié defaultValue por default

    });

//carSchema.plugin(mongoosePaginate);

export const CarModel = mongoose.models.Car || mongoose.model('Car', carSchema);


















    


