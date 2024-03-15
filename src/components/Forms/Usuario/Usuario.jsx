import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import usuarioValidationSchema from "./validacionesUsuario";


const Usuario = ({ carData, editable, setShowSuccessMessage }) => {
 

  return (
    <div>
      <h2>Ingresar/editar datos del usuario</h2>
      <Formik
        initialValues={carData}
        validationSchema={usuarioValidationSchema}
        onSubmit={(values) => {
          // lógica para enviar los valores del formulario y mostrar mensaje de éxito
          console.log(values);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            {/* num de usuario */}
            <div>
              <div>
                <label htmlFor="userNumber">N° de socio</label>
                <Field type="text" name="userNumber" disabled={!editable} />
              </div>
              {/* fin num usuario */}

              {/* nombre */}
              <div>
                <label htmlFor="name">Nombre</label>
                <Field type="text" name="name" disabled={!editable} />
              </div>
              {/* fin nombre */}

              {/* apellido */}
              <div>
                <label htmlFor="lastname">Apellido</label>
                <Field type="text" name="lastname" disabled={!editable} />
              </div>
              {/* fin apellido */}

              {/* dni */}
              <div>
                <label htmlFor="dni">DNI N°</label>
                <p>Ingresar sólo números.Sin puntos ni espacios</p>
                <Field type="text" name="dni" disabled={!editable} />
              </div>
              {/* fin dni  */}

              {/* teléfono */}
              <div>
                <label htmlFor="phone">Teléfono</label>
                <Field type="text" name="phone" disabled={!editable} />
              </div>
              {/* fin telefono  */}

              {/* licencia nautica */}
              <div>
                <label htmlFor="nauticalLicense">Licencia Náutica</label>
                <p>Colocar una R en caso de que la licencia no sea necesaria</p>
                <Field
                  type="text"
                  name="nauticalLicense"
                  disabled={!editable}
                />

                {/* vencimiento */}
                <div>
                  <label htmlFor="expiration">
                    Ingresar fecha de vencimiento de la licencia
                  </label>
                  <Field type="text" name="expiration" disabled={!editable} />
                </div>
                {/* fin vencimiento */}
              </div>
              {/* fin licencia náutica  */}

              {/* infomarción adicional */}
              <div>
                <label htmlFor="infoCar">Observaciones:</label>
                <Field as="textarea" name="observations" disabled={!editable} />
              </div>
              {/* fin información adicional */}
            </div>
            {editable && (
              <button
                type="submit"
                disabled={!editable || isSubmitting || !isValid}
              >
                Guardar
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Vehiculo;
