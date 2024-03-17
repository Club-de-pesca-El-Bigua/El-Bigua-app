import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import vehiculoValidationSchema from "../../Validaciones/validacionesVehiculo";

const Vehiculo = ({ carData, editable, setShowSuccessMessage }) => {
  return (
    <div>
      <h2>Ingresar/editar datos del vehículo</h2>
      <Formik
        initialValues={carData}
        validationSchema={vehiculoValidationSchema}
        onSubmit={(values) => {
          // lógica para enviar los valores del formulario y mostrar mensaje de éxito
          console.log(values);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            {/* dominio */}
            <div>
              <div>
                <label htmlFor="plate">Dominio (patente)</label>
                <Field type="text" name="plate" disabled={!editable} />
              </div>
              {/* fin dominio */}

              {/* marca */}
              <div>
                <label htmlFor="carBrand">Marca</label>
                <Field type="text" name="carBrand" disabled={!editable} />
              </div>
              {/* fin marca */}

              {/* modelo */}
              <div>
                <label htmlFor="year">Modelo</label>
                <Field type="text" name="year" disabled={!editable} />
              </div>
              {/* fin modelo */}

              {/* color */}
              <div>
                <label htmlFor="carColor">Color</label>
                <Field type="text" name="carColor" disabled={!editable} />
              </div>
              {/* fin color  */}
              {/* infomarción adicional */}
              <div>
                <label htmlFor="infoCar">Información adicional:</label>
                <Field as="textarea" name="infoCar" disabled={!editable} />
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
