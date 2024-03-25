import Joi from "joi";


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
    userNumber: Joi.string()
                    .pattern(/^\d{5}$/) // Expresión regular para exactamente 5 dígitos numéricos
                    .required()
                    .messages({
                        'string.base': 'El número de usuario debe ser una cadena de texto',
                        'string.pattern.base': 'El número de usuario debe contener exactamente 5 dígitos numéricos'
                    }),
    carBrand: Joi.string()
                 .required()
                 .messages({
                    'string.base': 'La  marca del vehiculo debe ser una cadena de texto.',
                    'string.empty': 'La marca del vehiculo no puede estar vacía.'
        }),
    year: Joi.string()
             .required()
             .messages({
                'string.base': 'El Modelo del vehículo debe ser una cadena de texto.',
                'string.empty': 'El Modelo del vehiculo no puede estar vacio.'
             }),
    carColor: Joi.string()
                 .required()
                 .messages({
                    'string.base': 'El color del vehiculo debe ser una cadena de texto.',
                    'string.empty': 'El color del vehiculo no puede estar vacio.'
                 }),
    infoCar: Joi.string()
                  .required()
                  .messages({
                    'string.base': 'La informacion adicional del vehiculo debe ser una cadena de texto.',
                    'string.empty': 'La informacion adicional del vehículo no puede estar vacia.'
                  }),
});

export default carSchemaValidate;