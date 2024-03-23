import React from "react";
import { Formik, Field, Form, ErrorMessage, useFormikContext } from "formik";
import Link from "next/link";
import moment from "moment";
import usuarioValidationSchema from "@/components/Forms/Validaciones/validacionesUsuario";

const AddUserForm = ({ onSubmit }) => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl mb-4">Ingresar datos del nuevo usuario</h1>
      <Formik
        initialValues={{
          userNumber: "",
          name: "",
          lastname: "",
          dni: "",
          phone: "",
          nauticalLicense: "",
          expiration: "",
          observations: "",
        }}
        validationSchema={usuarioValidationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid, handleChange, values }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="userNumber"
                className="block text-lg font-medium text-gray-700"
              >
                N° de Socio
              </label>
              <Field
                type="number"
                name="userNumber"
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="userNumber"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Nombre
              </label>
              <Field
                type="text"
                name="name"
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="lastname"
                className="block text-lg font-medium text-gray-700"
              >
                Apellido
              </label>
              <Field
                type="text"
                name="lastname"
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="dni"
                className="block text-lg font-medium text-gray-700"
              >
                DNI N°
              </label>
              <Field
                type="number"
                name="dni"
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="dni"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-gray-700"
              >
                Teléfono
              </label>
              <Field
                type="number"
                name="phone"
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="nauticalLicense"
                className="block text-lg font-medium text-gray-700"
              >
                Licencia Náutica
              </label>
              <Field
                type="text"
                name="nauticalLicense"
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="nauticalLicense"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="expiration"
                className="block text-lg font-medium text-gray-700"
              >
                Fecha de vencimiento de la licencia
              </label>
              <Field
                type="date"
                name="expiration"
                onChange={handleChange}
                value={values.expiration}
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="expiration"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="observations"
                className="block text-lg font-medium text-gray-700"
              >
                Observaciones
              </label>
              <Field
                as="textarea"
                name="observations"
                className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="observations"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Guardar
            </button>

            <Link href="/embarcaciones">
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

export default AddUserForm;
