import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import moment from "moment";
import embarcacionValidationSchema from "@/components/Forms/Validaciones/validacionesEmbarcaciones";

const AgregarEmbarcacionForm = () => {
  const handleSubmit = (values) => {
    // Lógica para manejar la presentación de datos
    console.log(values);
  };

  const handleDateChange = (e, setFieldValue) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl mb-4">Agregar Embarcación</h1>
      <Formik
        initialValues={{
          registrationNumber: "",
          dueDate: "",
          type: "",
          color: "",
          capacity: "",
          brand: "",
          hp: "",
          fantasyName: "",
          insurer: "",
          dueDateInsurance: "",
          info: "",
        }}
        validationSchema={embarcacionValidationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="registrationNumber"
                className="block text-lg font-medium text-gray-700"
              >
                Número de matrícula
              </label>
              <Field
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="registrationNumber"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="dueDate"
                className="block text-lg font-medium text-gray-700"
              >
                Fecha de vencimiento
              </label>
              <Field
                type="date"
                id="dueDate"
                name="dueDate"
                onChange={(e) => handleDateChange(e, formik.setFieldValue)}
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="dueDate"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-lg font-medium text-gray-700"
              >
                Tipo de embarcación
              </label>
              <Field
                type="text"
                id="type"
                name="type"
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="type"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="color"
                className="block text-lg font-medium text-gray-700"
              >
                Color de embarcación
              </label>
              <Field
                type="text"
                id="color"
                name="color"
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="color"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="capacity"
                className="block text-lg font-medium text-gray-700"
              >
                Capacidad
              </label>
              <Field
                type="number"
                id="capacity"
                name="capacity"
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="capacity"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="brand"
                className="block text-lg font-medium text-gray-700"
              >
                Marca
              </label>
              <Field
                type="text"
                id="brand"
                name="brand"
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="brand"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="hp"
                className="block text-lg font-medium text-gray-700"
              >
                Hp
              </label>
              <Field
                type="text"
                id="hp"
                name="hp"
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="hp"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="fantasyName"
                className="block text-lg font-medium text-gray-700"
              >
                Nombre de Fantasia
              </label>
              <Field
                type="text"
                id="fantasyName"
                name="fantasyName"
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="fantasyName"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="insurer"
                className="block text-lg font-medium text-gray-700"
              >
                Seguro
              </label>
              <Field
                type="text"
                id="insurer"
                name="insurer"
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="insurer"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="dueDateInsurance"
                className="block text-lg font-medium text-gray-700"
              >
                Vencimiento del Seguro
              </label>
              <Field
                type="date"
                id="dueDateInsurance"
                name="dueDateInsurance"
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="dueDateInsurance"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <Link href="/usuario">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
              >
                Atras
              </button>
            </Link>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Guardar
            </button>
            <Link href="/vehiculo">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
              >
                Siguiente
              </button>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AgregarEmbarcacionForm;
