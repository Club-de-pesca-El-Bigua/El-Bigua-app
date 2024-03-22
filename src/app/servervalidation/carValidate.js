import Joi from "joi";
import moment from "moment";

// Define el esquema de validacion utilizando Joi
const carSchemaValidate = Joi.object({
    plate: Joi.string()
                .pattern(/^(?:[A-Z]{3}\d{3}|[A-Z]{2}\d{3}[A-Z]{2})$/)
                .required()
                .messages({
                    'string.base': 'La patente debe ser una cadena de texto.',
                    'string.empty': 'La patente no puede estar vacía.',
                    'string.pattern.base': 'La patente debe terer un formato "aaa123" o "aa132aa".'
        }),
    carBrand: Joi.string()
                 .required()
                 .message({
                    'string.base': 'La  marca del vehiculo debe ser una cadena de texto.',
                    'string.empty': 'La marca del vehiculo no puede estar vacía.'
        }),
    year: Joi.string()
             .required()
             .message({
                'string.base': 'El año del vehículo debe ser una cadena de texto.',
                'string.empty': 'El año del vehiculo no puede estar vacio.'
             }),
    carColor: Joi.string()
                 .required()
                 .message({
                    'string.base': 'El color del vehiculo debe ser una cadena de texto.',
                    'string.empty': 'El color del vehiculo no puede estar vacio.'
                 }),
    infoCar: Joi.string()
                  .required()
                  .message({
                    'string.base': 'La informacion adicional del vehiculo debe ser una cadena de texto.',
                    'string.empty': 'La informacion adicional del vehículo no puede estar vacia.'
                  }),
    state: Joi.boolean()
              .required()
              .message({
                'boolean.base':'El estado del vehículo debe ser un valor booleano.',
              }),
});

export default carSchemaValidate;