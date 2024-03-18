import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "next/link";
import usuarioValidationSchema from "@/components/Validaciones/validacionesUsuario";

const AddUserForm = ({ onSubmit }) => {
  return (
    <div>
      <h2>Ingresar datos del nuevo usuario</h2>
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
        {({ isSubmitting, isValid }) => (
          <Form>
            <div>
              <label htmlFor="userNumber">N° de Socio</label>
              <Field type="number" name="userNumber" />
              <ErrorMessage name="userNumber" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="name">Nombre</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="lastname">Apellido</label>
              <Field type="text" name="lastname" />
              <ErrorMessage name="lastname" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="dni">DNI N°</label>
              <Field type="number" name="dni" />
              <ErrorMessage name="dni" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="phone">Teléfono</label>
              <Field type="text" name="phone" />
              <ErrorMessage name="phone" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="nauticalLicense">Licencia Náutica</label>
              <Field type="text" name="nauticalLicense" />
              <ErrorMessage name="nauticalLicense" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="expiration">Fecha de vencimiento de la licencia</label>
              <Field type="date" name="expiration" />
              <ErrorMessage name="expiration" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="observations">Observaciones</label>
              <Field as="textarea" name="observations" />
              <ErrorMessage name="observations" component="div" className="error-message" />
            </div>

            <button type="submit" disabled={isSubmitting || !isValid}>
              Guardar
            </button>
           
            <Link href="/embarcaciones">
              
                <button type="button">Siguiente</button>
              
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddUserForm;
