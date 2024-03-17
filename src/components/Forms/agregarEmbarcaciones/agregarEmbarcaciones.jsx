import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import embarcacionValidationSchema from "@/components/Validaciones/validacionesEmbarcaciones";
import Link from "next/link";

const AgregarEmbarcacionForm = () => {
  const handleSubmit = (values) => {
    // Lógica para manejar la presentación de datos
    console.log(values);
  };

  return (
    <div>
      <h1>Agregar Embarcación</h1>
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
        validationSchema={embarcacionValidationSchema} // Utilizar el esquema de validación importado
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <div>
              <label htmlFor="registrationNumber">Número de matrícula</label>
              <Field type="text" id="registrationNumber" name="registrationNumber" />
              <ErrorMessage name="registrationNumber" component="div" />
            </div>

            <div>
              <label htmlFor="dueDate">Fecha de vencimiento</label>
              <Field type="text" id="dueDate" name="dueDate" />
              <ErrorMessage name="dueDate" component="div" />
            </div>

            <div>
              <label htmlFor="type">Tipo de embarcación</label>
              <Field type="text" id="type" name="type" />
              <ErrorMessage name="type" component="div" />
            </div>
            <div>
              <label htmlFor="color">Color de embarcación</label>
              <Field type="text" id="color" name="color" />
              <ErrorMessage name="color" component="div" />
            </div>
            <div>
              <label htmlFor="capacity">Capacidad</label>
              <Field type="text" id="capacity" name="capacity" />
              <ErrorMessage name="capacity" component="div" />
            </div>
            <div>
              <label htmlFor="brand">Marca</label>
              <Field type="text" id="brand" name="brand" />
              <ErrorMessage name="brand" component="div" />
            </div>
            <div>
              <label htmlFor="hp">Hp</label>
              <Field type="text" id="hp" name="hp" />
              <ErrorMessage name="hp" component="div" />
            </div>
            <div>
              <label htmlFor="fantasyName">Nombre de Fantasia</label>
              <Field type="text" id="fantasyName" name="fantasyName" />
              <ErrorMessage name="fantasyName" component="div" />
            </div>
            <div>
              <label htmlFor="insurer">Seguro</label>
              <Field type="text" id="insurer" name="insurer" />
              <ErrorMessage name="insurer" component="div" />
            </div>
            <div>
              <label htmlFor=" dueDateInsurance">Vencimiento del Seguro</label>
              <Field type="text" id=" dueDateInsurance" name=" dueDateInsurance" />
              <ErrorMessage name=" dueDateInsurance" component="div" />
            </div>
            <div>
              <label htmlFor=" dueDateInsurance">Vencimiento del Seguro</label>
              <Field type="text" id=" dueDateInsurance" name=" dueDateInsurance" />
              <ErrorMessage name=" dueDateInsurance" component="div" />
            </div>

            {/* Repite este patrón para otros campos de entrada */}

            <button type="submit">Guardar</button>
            <Link href="/vehiculo">
              
              <button type="button">Siguiente</button>
            
          </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AgregarEmbarcacionForm;
