import mongoose from "mongoose";
//import { Types, Schema, model, models } from 'mongoose';
//import mongoosePaginate from "mongoose-paginate"; // proporciona funcionalidad de paginacion en mongoDB de datos grandes


//Creamos el modelo de embarcacion a partir del Schema

const shipSchema = mongoose.Schema({
    userNumber:         { type: String, required: [true, "Please complete the field"] }, //Numero de Socio para relacionar
    registrationNumber: { type: String, required: [true, "Please complete the field"] }, // num de matricula
    dueDate:            { type: Date,   required: [true, "Please complete the field"] }, //vencimiento matricula
    type:               { type: String, required: [true, "Please complete the field"] }, //tipo de embarcacion
    color:              { type: String, required: [true, "Please complete the field"] }, //color del casco
    capacity:           { type: Number, required: [true, "Please complete the field"] }, //capacidad
    brand:              { type: String, required: [true, "Please complete the field"] }, //marca
    hp:                 { type: Number, required: [true, "Please complete the field"] }, //caballos de fuerza hp
    fantasyName:        { type: String, required: [true, "Please complete the field"] }, //Nombre de fantasia
    insurer:            { type: String, required: [true, "Please complete the field"] }, //nombre del seguro
    dueDateInsurance:   { type: Date,   required: [true, "Please complete the field"] }, //vencimiento seguro
    info:               { type: String, required: [true, "Please complete the field"] }, //Observaciones 
    state:              { type: Boolean, default: false },                                //Estado para validar asiganacion socio
});

   // EmbarcaSchema.plugin(mongoosePaginate);

   export const ShipModel = mongoose.models.Ship || mongoose.model('Ship', shipSchema);

















  





