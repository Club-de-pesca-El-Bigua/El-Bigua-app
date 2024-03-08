import { Types, Schema, model, models } from 'mongoose';

const userSchema = new Schema({

    userNumber: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    dni: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    nauticalLicense: {
        type: String,
        required: false,
        expiration: {
            type: Date,
            require: false
        },
        observations: {
            type: String,
            require: false
        },
    },
});

export default models.Users || model('Users', userSchema);