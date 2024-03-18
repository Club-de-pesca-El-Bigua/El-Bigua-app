import Joi from "joi";
import moment from 'moment';


// Define el esquema de validación utilizando Joi
const userSchemaValidate = Joi.object({
  userNumber: Joi.string()
                    .pattern(/^\d{5}$/) // Expresión regular para exactamente 5 dígitos numéricos
                    .required()
                    .messages({
                        'string.base': 'El número de usuario debe ser una cadena de texto',
                        'string.pattern.base': 'El número de usuario debe contener exactamente 5 dígitos numéricos'
                    }),
  name:         Joi.string()
                    .pattern(/^[A-Za-z\s]{1,50}$/)
                    .required()
                    .messages({
                        'string.pattern.base': 'Nombre solo debe tener texto y un longitud maxima de 50 caracteres',
                    }),
  lastname:     Joi.string()
                    .pattern(/^[A-Za-z\s]{1,50}$/)
                    .required()
                    .messages({
                        'string.pattern.base': 'Apellido solo debe tener texto y un longitud maxima de 50 caracteres',
                    }),
  dni:          Joi.number()
                    .integer()
                    .min(10000000) // Mínimo valor de 8 dígitos
                    .max(99999999) // Máximo valor de 8 dígitos
                    .required()
                    .messages({
                        'number.base': 'El DNI debe ser un número',
                        'number.integer': 'El DNI debe ser un número entero',
                        'number.min': 'El DNI debe tener exactamente 8 dígitos',
                        'number.max': 'El DNI debe tener exactamente 8 dígitos'
                    }),
 phone:        Joi.string()
                    .pattern(/^\+[0-9]{1,3}[0-9]{9,13}$/)
                    .min(2)
                    .max(14)
                    .required()
                    .messages({
                        'string.pattern.base': 'El número de teléfono debe comenzar con "+" y tener entre 10 y 14 dígitos en total',
                        'string.min': 'El número de teléfono debe tener al menos {#limit} caracteres',
                        'string.max': 'El número de teléfono no debe tener más de {#limit} caracteres',
                        'any.required': 'El número de teléfono es obligatorio',
                    }),
 nauticalLicense: Joi.string()
                    .pattern(/^[0-9]+$/)
                    .min(6)
                    .max(10)
                    .required()
                    .messages({
                        'string.pattern.base': 'La licencia náutica debe contener solo números',
                        'string.min': 'La licencia náutica debe tener al menos {#limit} caracteres',
                        'string.max': 'La licencia náutica no puede tener más de {#limit} caracteres',
                        'any.required': 'La licencia náutica es obligatoria',
                    }),
 expiration: Joi.string()
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
  observations: Joi.string()
                    .pattern(/^[A-Za-z\s]{1,50}$/)
                    .required()
                    .messages({
                        'string.pattern.base': 'La observacion tiene un longitud maxima de 50 caracteres',
                    }),
  state:        Joi.boolean()
                    .required()
                    .default(true),
})
export default userSchemaValidate;



