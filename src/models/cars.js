const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate"); // proporciona funcionalidad de paginacion en mongoDB de datos grandes

//modelo de carro o remolque
const CarSchema = new mongoose.Schema({
    plate     : { type: Number, required: true },  //placa-patente del vehiculo
    carBrand  : { type: String, required: true },  //marca del vehiculo
    year      : { type: String, required: true},   //modelo del vehiculo
    color     : { type:String, required: true},    //color del vehiculo
    infoCar   : { type:String, required: true},    //informacion adicional 
    });

CarSchema.plugin(mongoosePaginate);
module.exports= mongoose.model('Car', CarSchema);


















    


