import * as Yup from "yup";
import moment from 'moment';

const usuarioValidationSchema = Yup.object({
  userNumber: Yup.string()
    .required("El número de usuario es obligatorio")
    .matches(
      /^[0-9]+$/,
      "Solo se permiten números en el campo de número de usuario"
    )
    .length(5, "El número de usuario debe tener exactamente 5 dígitos"), //Longitud maxima 5 digitos
  name: Yup.string()
    .required("El nombre es obligatorio")
    .matches(/^[a-zA-Z\s]+$/, "Solo se permiten letras en el campo de nombre")
    .max(50, 'El nombre debe tener como máximo 50 caracteres'), // solo permite 50 caracteres
  lastname: Yup.string()
    .required("El apellido es obligatorio")
    .matches(/^[a-zA-Z\s]+$/, "Solo se permiten letras en el campo de apellido")
    .max(50, 'El nombre debe tener como máximo 50 caracteres'), // solo permite 50 caracteres
  dni: Yup.string()
    .matches(/^[0-9]+$/, "El DNI debe contener solo números")
    .required("El DNI es obligatorio")
    .length(8, "El dni debe tener exactamente 8 dígitos"), //Longitud maxima 8 digitos
    
  phone: Yup.string()
    .required("El teléfono es obligatorio")
    .matches(/^\+[0-9]+$/, "Debe iniciar con el signo + y debe contener solo números") // debe comenzar con el signo +
    .min(12, "El número de teléfono debe tener al menos 12 dígitos")
    .max(14, "El número de teléfono debe tener máximo 14 dígitos"),
  
  nauticalLicense: Yup.string()
    .required("La Licencia Nautica es obligatorio")
    .matches(/^[0-9]+$/, "Solo se permiten números en el campo de número de usuario")
    .min(6, "El número de licencia náutica debe tener al menos 6 dígitos")
    .max(10, "El número de licencia náutica debe tener máximo 10 dígitos"),
  
  expiration: Yup.string()
    .test('is-valid-date', 'La fecha de vencimiento no es válida. Utiliza el formato yyyy-mm-dd', (value) => {
        const expirationDate = moment(value, 'YYYY-MM-DD', true);
        const currentDate = moment();
        return expirationDate.isValid() && expirationDate.isSameOrAfter(currentDate, 'day');
    })
    .required('La fecha de vencimiento es obligatoria'),
  
  observations: Yup.string()
    .required("La observacion es obligatoria")
    .matches(/^[a-zA-Z\s]+$/, "Solo se permiten letras en el campo de nombre")
    .max(50, 'El nombre debe tener como máximo 50 caracteres'), // solo permite 50 caracteres
});

export default usuarioValidationSchema;
