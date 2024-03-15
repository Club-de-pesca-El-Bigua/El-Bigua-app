import mongoose from "mongoose";
//import { Types, Schema, model, models } from 'mongoose';
//import mongoosePaginate from "mongoose-paginate"; // proporciona funcionalidad de paginacion en mongoDB de datos grandes


//Creamos el modelo de embarcacion a partir del Schema

const shipSchema = mongoose.Schema({
    registrationNumber: { type: String, required: [true, "Please complete the field"] },
    dueDate:            { type: Date, required: [true, "Please complete the field"] },
    type:               { type: String, required: [true, "Please complete the field"] },
    color:              { type: String, required: [true, "Please complete the field"] },
    capacity:           { type: Number, required: [true, "Please complete the field"] },
    brand:              { type: String, required: [true, "Please complete the field"] },
    hp:                 { type: Number, required: [true, "Please complete the field"] },
    fantasyName:        { type: String, required: [true, "Please complete the field"] },
    insurer:            { type: String, required: [true, "Please complete the field"] },
    dueDateInsurance:   { type: Date, required: [true, "Please complete the field"] },
    info:               { type: String, required: [true, "Please complete the field"] },
    state:              { type: Boolean, default: true }, // Cambié defaultValue por default
});

   // EmbarcaSchema.plugin(mongoosePaginate);

   export const ShipModel = mongoose.models.Ship || mongoose.model('Ship', shipSchema);

















  





