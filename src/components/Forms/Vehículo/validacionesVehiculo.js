import * as Yup from "yup";

const vehiculoValidationSchema = Yup.object({
  plate: Yup.string()
    .required("El dominio (patente) es obligatorio")
    .matches(
      /^[a-zA-Z0-9]{1,7}$/,
      "Formato de patente inválido. Debe tener un máximo de 7 caracteres, que pueden ser letras o números."
    ),
  carBrand: Yup.string()
    .required("La marca del vehículo es obligatoria")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Solo se permiten letras y números en el campo de marca del vehículo"
    ),

  year: Yup.string()
    .required("El modelo del vehículo es obligatorio")
    .matches(
      /^[0-9]+$/,
      "Solo se permiten números en el campo de modelo del vehículo"
    ),
  carColor: Yup.string()
    .required("El color del vehículo es obligatorio")
    .matches(
      /^[a-zA-Z]+$/,
      "Solo se permiten letras en el campo de color del vehículo"
    ),
  //falta completar
  infoCar: Yup.string(),
});

export default vehiculoValidationSchema;
