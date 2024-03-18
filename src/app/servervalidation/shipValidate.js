import Joi from "joi";
import moment from 'moment'

const shipSchemaValidate = Joi.object({
    registrationNumber:   Joi.string()
                                .pattern(/^[A-Za-z]{2}-\d{6}$/)
                                .required()
                                .messages({      
                                    'string.base': '"La matrícula debe tener el formato correcto: dos letras, un guion y seis números.',
                                    'string.empty': 'El número de registro no puede estar vacío.',
                                    'string.length': 'El número de registro debe tener exactamente 9 caracteres.',
                                    'string.pattern.base': '"La matrícula debe tener el formato correcto: dos letras, un guion y seis números'
                                }),
    dueDate:                Joi.date()
                                .when('$strict', {
                                        is: true,
                                        then: Joi.required().messages({
                                            'any.required': 'La fecha de vencimiento es obligatoria',
                                        })
                                })
                                .custom((value, helpers) => {
                                const expirationDate = moment(value, 'YYYY-MM-DD', true);
                                const currentDate = moment();

                                if (!expirationDate.isValid()) {
                                    return helpers.error('any.invalid');
                                }

                                if (expirationDate.isBefore(currentDate, 'day')) {
                                    return helpers.error('date.expired', { limit: currentDate.format('YYYY-MM-DD') });
                                }

                                return value;
                                }, 'custom validation for expiration date')
                                    .messages({
                                    'any.invalid': 'La fecha de vencimiento no es válida. Utiliza el formato yyyy-mm-dd',
                                    'date.expired': 'La fecha de vencimiento debe ser igual o posterior a la fecha actual'
                                }),
    type:                   Joi.string()
                                .pattern(/^[A-Za-z\s]{1,15}$/)
                                .required()
                                .messages({      
                                    'string.base': 'El tipo de embarcacion debe ser una cadena de texto.',
                                    'string.empty': 'El tipo de embarcacio no puede estar vacío.',
                                    'string.pattern.base': 'El tipo de embarcacio no puede exceder de 15 caracteres'
                                }), 
    color:                  Joi.string()
                                .pattern(/^[A-Za-z\s]{1,15}$/)
                                .required()
                                .messages({      
                                    'string.base': 'El color de la embarcacion debe ser una cadena de texto.',
                                    'string.empty': 'El color de la embarcacio no puede estar vacío.',
                                    'string.pattern.base': 'El color de la embarcacio no puede exceder de 15 caracteres'
                                }),  
    capacity:               Joi.number()
                                .integer()
                                .min(1) // Mínimo valor de 1 dígitos
                                .max(1000) // Máximo valor de 4 dígitos
                                .required()
                                .messages({
                                    'number.base': 'La capacidad debe ser un número entre 1 y 1000',
                                    'number.integer': 'La capacidad debe ser un número entero',
                                    'number.min': 'La capacidad debe tener al menos un tripulante',
                                    'number.max': 'La capacidad debe tener un maximo de 1000 tripulantes'
                                }),                 
    brand:                  Joi.string()
                                .pattern(/^[A-Za-z0-9\s]{1,15}$/)
                                .required()
                                .messages({      
                                    'string.base': 'La Marca debe ser una cadena de texto.',
                                    'string.empty': 'La Marca de la embarcacio no puede estar vacío.',
                                    'string.pattern.base': 'La Marca de la embarcacio no puede exceder de 15 caracteres'
                                }), 
    hp:                     Joi.number()
                                .integer()
                                .min(1) // Mínimo valor de 1 dígitos
                                .max(2000) // Máximo valor de 4 dígitos
                                .required()
                                .messages({
                                    'number.base': 'La Potencia debe ser un número entre 1 y 2000',
                                    'number.integer': 'La Potencia debe ser un número entero',
                                    'number.min': 'La Potencia debe tener al menos 1 (hp)',
                                    'number.max': 'La Potencia debe tener un maximo de 1000 (hp)'
                                }),
    fantasyName:            Joi.string()
                                .pattern(/^[A-Za-z0-9\s]{1,30}$/)
                                .required()
                                .messages({      
                                    'string.base': 'EL FantasyName debe ser una cadena de texto.',
                                    'string.empty': 'EL FantasyName de la embarcacio no puede estar vacío.',
                                    'string.pattern.base': 'EL FantasyName de la embarcacio no puede exceder de 30 caracteres'
                                }),
    insurer:                Joi.string()
                                .pattern(/^[A-Za-z0-9\s]{1,30}$/)
                                .required()
                                .messages({      
                                    'string.base': 'EL Nombre de la Aseguradora debe ser una cadena de texto.',
                                    'string.empty': 'EL Nombre de la Aseguradora de la embarcacio no puede estar vacío.',
                                    'string.pattern.base': 'EL Nombre de la Aseguradora de la embarcacio no puede exceder de 30 caracteres'
                                }),                    
    dueDateInsurance:       Joi.date()
                                .when('$strict', {
                                    is: true,
                                    then: Joi.required().messages({
                                        'any.required': 'La fecha de vencimiento es obligatoria',
                                    })
                                })
                                .custom((value, helpers) => {
                                    const expirationDate = moment(value, 'YYYY-MM-DD', true);
                                    const currentDate = moment();

                                    if (!expirationDate.isValid()) {
                                        return helpers.error('any.invalid');
                                    }

                                    if (expirationDate.isBefore(currentDate, 'day')) {
                                        return helpers.error('date.expired', { limit: currentDate.format('YYYY-MM-DD') });
                                    }

                                    return value;
                                }, 'custom validation for expiration date')
                                .messages({
                                    'any.invalid': 'La fecha de vencimiento no es válida. Utiliza el formato yyyy-mm-dd',
                                    'date.expired': 'La fecha de vencimiento debe ser igual o posterior a la fecha actual'
                                }),                            
    info:                   Joi.string()
                                .pattern(/^[A-Za-z0-9\s]{1,30}$/)
                                .required()
                                .messages({      
                                    'string.base': 'El campo Informacion debe ser una cadena de texto.',
                                    'string.empty': 'El campo Informacion no puede estar vacío.',
                                    'string.pattern.base': 'El campo Informacion no puede exceder de 30 caracteres'
                                }), 
    state:                  Joi.boolean()
                                .required()
                                .default(true), 
})

   

export default shipSchemaValidate;




//usarala en validacion de car de patente

// registrationNumber:   Joi.string()
//                                 .required()
//                                 .length(7)
//                                 .pattern(/^\d{2}[a-zA-Z]{3}\d{2}$/)
//                                 .required()
//                                 .messages({
//                                     'string.base': 'El número de registro debe ser una cadena de texto.',
//                                     'string.empty': 'El número de registro no puede estar vacío.',
//                                     'string.length': 'El número de registro debe tener exactamente 7 caracteres.',
//                                     'string.pattern.base': 'El número de registro debe tener el formato correcto: dos números, tres letras y dos números.'
//                                 }),