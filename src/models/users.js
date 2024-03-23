import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

    userNumber          : { type: String, required: [true, "Please complete the field"] }, //Numero de Socio
    name                : { type: String, required: [true, "Please complete the field"] }, //Nombre
    lastname            : { type: String, required: [true, "Please complete the field"] }, //Apellido
    dni                 : { type: Number, required: [true, "Please complete the field"] }, //Numero DNI
    phone               : { type: String, required: [true, "Please complete the field"] }, //Numero de TLF 
    nauticalLicense     : { type: String, required: [true, "Please complete the field"] }, //Numero de licencia marina
    expiration          : { type: Date,   required: [true, "Please complete the field"] }, //Vencimiento de Licencia
    observations        : { type: String, required: [true, "Please complete the field"] }, //Observaciones del cliente
    statecar            : { type: Boolean, default: false },
    stateship           : { type: Boolean, default: false },
});

export const UserModel = mongoose.models.User|| mongoose.model('User', userSchema);