import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import vehiculoValidationSchema from "@/components/Forms/Validaciones/validacionesVehiculo";

const AgregarVehiculoForm = () => {
  const handleSubmit = (values) => {
    
    console.log(values);
  };

  return (
    <div>
      <h1>Agregar Vehículo</h1>
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
            <div>
              <label htmlFor="plate">Dominio (patente)</label>
              <Field type="text" id="plate" name="plate" />
              <ErrorMessage name="plate" component="div" />
            </div>

            <div>
              <label htmlFor="carBrand">Marca del vehículo</label>
              <Field type="text" id="carBrand" name="carBrand" />
              <ErrorMessage name="carBrand" component="div" />
            </div>

            <div>
              <label htmlFor="year">Modelo del vehículo</label>
              <Field type="text" id="year" name="year" />
              <ErrorMessage name="year" component="div" />
            </div>

            <div>
              <label htmlFor="carColor">Color del vehículo</label>
              <Field type="text" id="carColor" name="carColor" />
              <ErrorMessage name="carColor" component="div" />
            </div>
            <div>
              <label htmlFor="carColor">Color del vehículo</label>
              <Field type="text" id="carColor" name="carColor" />
              <ErrorMessage name="carColor" component="div" />
            </div>
         

            <button type="submit">Guardar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AgregarVehiculoForm;
