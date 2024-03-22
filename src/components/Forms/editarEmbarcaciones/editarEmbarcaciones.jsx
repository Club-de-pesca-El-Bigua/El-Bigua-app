import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import embarcacionValidationSchema from "../Validaciones/validacionesEmbarcaciones";



const Embarcacion = ({ embarcacionData, editable, setShowSuccessMessage }) => {
  

  return (
    <div>
      <h2>Ingresar/editar embarcación</h2>
      <Formik
        initialValues={embarcacionData}
        validationSchema={embarcacionValidationSchema}
        onSubmit={(values) => {
          // lógica para enviar los valores del formulario
          console.log(values);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            {/* matrícula */}
            <div>
              <p>Datos de la matrícula:</p>
              <div>
                <label htmlFor="registrationNumber">Número</label>
                <Field
                  type="text"
                  name="registrationNumber"
                  disabled={!editable}
                />
              </div>
              <div>
                <label htmlFor="dueDate">Fecha de vencimiento</label>
                <Field type="date" name="dueDate" disabled={!editable} />
              </div>
              {/* acá va algo que le avise que está vencida */}
            </div>
            {/* fin matrícula */}

            {/* datos de la embarcación */}
            <div>
              <p>Datos de la embarcación:</p>
              <div>
                {/* tipo */}
                <div>
                  <label htmlFor="type">Tipo de embarcación</label>
                  <Field as="select" name="type" id="type" disabled={!editable}>
                    <option value="">Seleccionar</option>
                    <option value="Barco pesquero">Barco pesquero</option>
                    <option value="Balsa">Balsa</option>
                    <option value="Bote de proa">Bote de proa</option>
                    <option value="Bote de remo">Bote de remo</option>
                    <option value="Bote inflable">Bote inflable</option>
                    <option value="Canoa">Canoa</option>
                    <option value="Esquí">Esquí</option>
                    <option value="Góndola">Góndola</option>
                    <option value="Kayak">Kayak</option>
                    <option value="Lancha">Lancha</option>
                    <option value="Lancha abierta">Lancha abierta</option>
                    <option value="Lancha cubierta">Lancha cubierta</option>
                    <option value="Moto acuática">Moto acuática</option>
                    <option value="Patín a motor">Patín a motor</option>
                    <option value="Patín a pedal">Patín a pedal</option>
                    <option value="Piragua">Piragua</option>
                    <option value="Tabla de kitesurf">Tabla de kitesurf</option>
                    <option value="Tabla de paddle surf">
                      Tabla de paddle surf
                    </option>
                    <option value="Tabla de surf">Tabla de surf</option>
                    <option value="Tabla de wakeboard">
                      Tabla de wakeboard
                    </option>
                    <option value="Tabla de windsurf">Tabla de windsurf</option>
                    <option value="Velero">Velero</option>
                    <option value="Yate">Yate</option>
                  </Field>
                </div>

                {/* fin tipo */}

                {/*  color del casco */}
                <div>
                  <label htmlFor="color">Color del casco</label>
                  <Field type="text" name="color" disabled={!editable} />
                </div>

                {/* fin color del casco */}

                {/* capacidad */}
                <div>
                  <label htmlFor="capacity">Capacidad</label>
                  <Field type="text" name="capacity" disabled={!editable} />
                </div>
                {/* fin capacidad */}

                {/* marca */}
                <div>
                  <label htmlFor="brand">Marca</label>
                  <Field type="text" name="brand" disabled={!editable} />
                </div>
                {/* fin marca */}

                {/* hp */}
                <div>
                  <label htmlFor="hp">HP</label>
                  <Field type="text" name="hp" disabled={!editable} />
                </div>
                {/* fin hp */}

                {/* nombre de fantasia */}
                <div>
                  <label htmlFor="fantasyName">Nombre de fantasía</label>
                  <Field type="text" name="fantasyName" disabled={!editable} />
                </div>
                {/* fin nombre de fantasia */}
              </div>
            </div>
            {/* fin datos de embarcación */}

            {/* datos del seguro */}
            <div>
              <p>Datos del seguro:</p>
              <div>
                <label htmlFor="insurer">Compañía aseguradora</label>
                <Field type="text" name="fantasyName" disabled={!editable} />
              </div>

              <div>
                <label htmlFor="dueDateInsurance">Fecha de vencimiento:</label>
                <Field
                  type="date"
                  name="dueDateInsurance"
                  disabled={!editable}
                />
              </div>
              {/* acá va algo que le avise que está vencidO */}
            </div>
            {/* fin datos del seguro */}

            {/* infomarción adicional */}
            <div>
              <label htmlFor="info">Información adicional:</label>
              <Field as="textarea" name="info" disabled={!editable} />
            </div>
            {/* fin información adicional */}

            {editable && (
              <button type="submit"  disabled={!editable || isSubmitting || !isValid}>
                Guardar
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Embarcacion;
