import * as Yup from "yup";

const usuarioValidationSchema = Yup.object({
  userNumber: Yup.string()
    .required("El número de usuario es obligatorio")
    .matches(
      /^[0-9]+$/,
      "Solo se permiten números en el campo de número de usuario"
    ),
  name: Yup.string()
    .required("El nombre es obligatorio")
    .matches(/^[a-zA-Z]+$/, "Solo se permiten letras en el campo de nombre"),
  lastname: Yup.string()
    .required("El apellido es obligatorio")
    .matches(/^[a-zA-Z]+$/, "Solo se permiten letras en el campo de apellido"),
  dni: Yup.string()
    .matches(/^[0-9]+$/, "El DNI debe contener solo números")
    .required("El DNI es obligatorio"),
  phone: Yup.string()
    .required("El teléfono es obligatorio")
    .matches(
      /^[0-9]+$/,
      "Solo se permiten números en el campo de número de usuario"
    ),
  nauticalLicense: Yup.string(),
  expiration: Yup.string().when("nauticalLicense", {
    is: (val) => val && val.trim() !== "R",
    then: Yup.string().required("La fecha de vencimiento es obligatoria"),
  }),
  //falta completar
  observations: Yup.string(),
});

export default usuarioValidationSchema;
