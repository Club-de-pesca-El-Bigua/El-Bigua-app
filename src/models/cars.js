import mongoose from "mongoose";

//const mongoosePaginate = require("mongoose-paginate"); // proporciona funcionalidad de paginacion en mongoDB de datos grandes

//modelo de carro o remolque
const carSchema = mongoose.Schema({
    plate     : { type: String, required: true },  //placa-patente del vehiculo
    carBrand  : { type: String, required: true },  //marca del vehiculo
    year      : { type: String, required: true},   //modelo del vehiculo
    carColor  : { type:String, required: true},    //color del vehiculo
    infoCar   : { type:String, required: true},    //informacion adicional 
    state     : { type: Boolean, default: true }, // Cambié defaultValue por default

    });

//carSchema.plugin(mongoosePaginate);

export const CarModel = mongoose.models.Car || mongoose.model('Car', carSchema);


















    


