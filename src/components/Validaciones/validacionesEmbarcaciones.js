import * as Yup from "yup";

const embarcacionValidationSchema = Yup.object({
  registrationNumber: Yup.string()
  .required("El número de matrícula es obligatorio")
  .matches(
    /^[A-Za-z]{2}-\d{6}$/,
    "La matrícula debe tener el formato correcto: dos letras, un guion y seis números"
  ),
  dueDate: Yup.string()
    .required("La fecha de vencimiento es obligatoria")
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Formato de fecha inválido. Debe ser dd/mm/aaaa"
    ),
  
  type: Yup.string().required("El tipo de embarcación es obligatorio")
  .matches(/^[a-zA-Z\s]+$/, "El tipo de embarcación solo puede contener letras y espacios")
  .max(15, "El tipo de embarcación no puede exceder los 15 caracteres"),
  color: Yup.string()
    .required("El color del casco es obligatorio")
    .matches(/^[a-zA-Z]+$/, "Solo se permiten letras en el campo de color"),
  capacity: Yup.string()
  .required("La capacidad es obligatoria")
  .matches(/^\d+$/, "Solo se permiten números en el campo de capacidad")
  .test('is-between', 'La capacidad debe estar entre 1 y 1000', value => {
      const numericValue = parseInt(value);
      return numericValue >= 1 && numericValue <= 1000;
  }),
  brand: Yup.string()
    .required("La marca es obligatoria")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Solo se permiten letras y números en el campo de marca"
    ),
  hp: Yup.string()
    .required("La potencia (HP) es obligatoria")
    .matches(/^\d+$/, "Solo se permiten números en el campo de potencia (HP)")
    .min(1, "La potencia (HP) debe ser de al menos 1")
    .max(2000, "La potencia (HP) debe ser de máximo 2000"),
  fantasyName: Yup.string()
    .required("El nombre de fantasía es obligatorio")
    .matches(
      /^[a-zA-Z0-9]{30}$/,
      "Solo se permiten letras y números en el campo de nombre de fantasía"
    ),
  insurer: Yup.string()
    .required("La compañía aseguradora es obligatoria")
    .matches(
      /^[a-zA-Z0-9]{30}$/,
      "Solo se permiten letras y números en el campo de compañía aseguradora"
    ),
  dueDateInsurance: Yup.string()
    .required("La fecha de vencimiento del seguro es obligatoria")
    .test(
      "valid-format",
      "Formato de fecha inválido. Debe ser DIA/MES/AÑO",
      (value) => {
        if (!value) return true;
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        return regex.test(value);
      }
    ),
  info: Yup.string()
    .required("La Informacion es obligatorio")
    .matches(
      /^[a-zA-Z0-9]{50}$/,
      "Solo se permiten letras y números en el campo de nombre de fantasía"
    ),
  });

export default embarcacionValidationSchema;
