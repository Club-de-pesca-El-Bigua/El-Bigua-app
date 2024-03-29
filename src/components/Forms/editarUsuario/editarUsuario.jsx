import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import moment from "moment"; // Asegúrate de importar Moment.js

const Usuario = ({ userData, editable, setShowSuccessMessage }) => {
  const [isLicenseExpired, setIsLicenseExpired] = useState(false);

  // Función para determinar si la licencia está vencida
  const checkLicenseExpiration = () => {
    const expirationDate = moment(userData.expiration, "YYYY-MM-DD");
    const currentDate = moment();
    setIsLicenseExpired(expirationDate.isBefore(currentDate, "day"));
  };

  // Ejecutar la verificación cuando userData o editable cambien
  useEffect(() => {
    checkLicenseExpiration();
  }, [userData, editable]);

  return (
    <div>
      <h2>Ingresar/editar datos del usuario</h2>
      <Formik
        initialValues={userData}
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
                <Field
                  type="text"
                  name="userNumber"
                  disabled={!editable}
                  style={{ borderColor: isLicenseExpired ? "red" : "initial" }}
                />
                <ErrorMessage
                  name="userNumber"
                  component="div"
                  className="error-message"
                />
              </div>
              {/* fin num usuario */}

              {/* nombre */}
              <div>
                <label htmlFor="name">Nombre</label>
                <Field
                  type="text"
                  name="name"
                  disabled={!editable}
                  style={{ borderColor: isLicenseExpired ? "red" : "initial" }}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>
              {/* fin nombre */}

              {/* apellido */}
              <div>
                <label htmlFor="lastname">Apellido</label>
                <Field
                  type="text"
                  name="lastname"
                  disabled={!editable}
                  style={{ borderColor: isLicenseExpired ? "red" : "initial" }}
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="error-message"
                />
              </div>
              {/* fin apellido */}

              {/* dni */}
              <div>
                <label htmlFor="dni">DNI N°</label>
                <p>Ingresar sólo números.Sin puntos ni espacios</p>
                <Field
                  type="text"
                  name="dni"
                  disabled={!editable}
                  style={{ borderColor: isLicenseExpired ? "red" : "initial" }}
                />
                <ErrorMessage
                  name="dni"
                  component="div"
                  className="error-message"
                />
              </div>
              {/* fin dni  */}

              {/* teléfono */}
              <div>
                <label htmlFor="phone">Teléfono</label>
                <Field
                  type="text"
                  name="phone"
                  disabled={!editable}
                  style={{ borderColor: isLicenseExpired ? "red" : "initial" }}
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="error-message"
                />
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
                  style={{ borderColor: isLicenseExpired ? "red" : "initial" }}
                />

                {/* vencimiento */}
                <div>
                  <label htmlFor="expiration">
                    Ingresar fecha de vencimiento de la licencia
                  </label>
                  <Field
                    type="text"
                    name="expiration"
                    disabled={!editable}
                    style={{ borderColor: isLicenseExpired ? "red" : "initial" }}
                  />
                </div>
                {/* fin vencimiento */}
                <ErrorMessage
                  name="nauticalLicense"
                  component="div"
                  className="error-message"
                />
              </div>
              {/* fin licencia náutica  */}

              {/* infomarción adicional */}
              <div>
                <label htmlFor="infoUser">Observaciones:</label>
                <Field
                  as="textarea"
                  name="observations"
                  disabled={!editable}
                  style={{ borderColor: isLicenseExpired ? "red" : "initial" }}
                />
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

export default Usuario;
