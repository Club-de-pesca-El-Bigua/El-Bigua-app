import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import vehiculoValidationSchema from "@/components/Forms/Validaciones/validacionesVehiculo";

const AgregarVehiculoForm = () => {
  const handleSubmit = (values) => {
    
    console.log(values);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl mb-4">Agregar Vehículo</h1>
      <Formik
        initialValues={{
          plate: "",
          carBrand: "",
          year: "",
          carColor: "",
          infoCar: "",
        }}
        validationSchema={vehiculoValidationSchema} 
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="plate" className="block text-lg font-medium text-gray-700">Dominio (patente)</label>
              <Field type="text" id="plate" name="plate"  className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"/>
              <ErrorMessage name="plate" component="div" className="text-red-500 text-sm mt-1"/>
            </div>

            <div className="mb-4">
              <label htmlFor="carBrand" className="block text-lg font-medium text-gray-700">Marca del vehículo</label>
              <Field type="text" id="carBrand" name="carBrand"  className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"/>
              <ErrorMessage name="carBrand" component="div" className="text-red-500 text-sm mt-1"/>
            </div>

            <div className="mb-4">
              <label htmlFor="year" className="block text-lg font-medium text-gray-700">Modelo del vehículo</label>
              <Field type="text" id="year" name="year"  className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"/>
              <ErrorMessage name="year" component="div" className="text-red-500 text-sm mt-1"/>
            </div>

            <div className="mb-4">
              <label htmlFor="carColor" className="block text-lg font-medium text-gray-700">Color del vehículo</label>
              <Field type="text" id="carColor" name="carColor"  className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"/>
              <ErrorMessage name="carColor" component="div" className="text-red-500 text-sm mt-1"/>
            </div>
            <div className="mb-4">
              <label htmlFor="carColor" className="block text-lg font-medium text-gray-700">Color del vehículo</label>
              <Field type="text" id="carColor" name="carColor"  className="border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"/>
              <ErrorMessage name="carColor" component="div" className="text-red-500 text-sm mt-1"/>
            </div>
         
            <Link href="/embarcaciones">
              <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">Atras</button>
            </Link>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Guardar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AgregarVehiculoForm;
