"use client";
import React, { useState, useEffect } from "react";
import Usuario from "@/components/Forms/editarUsuario/editarUsuario";
import BackButton from "@/components/BackButton/BackButton";

const editUser = () => {
  // estado para manejar si el formulario está en modo de edición o no
  const [editable, setEditable] = useState(false);

  // estado  para mostrar un mensaje de éxito después de guardar los cambios
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Estado para almacenar los datos del usuario que se editarán
  const [userData, setUserData] = useState({
    userNumber: "",
    name: "",
    lastname: "",
    dni: "",
    phone: "",
    nauticalLicense: "",
    expiration: "",
    observations: "",
  });

  useEffect(() => {
    // Función para obtener los datos del usuario
    //Aca hay que hacer una peticion de tipo get para traerme
    // los datos del usuario desde el back
  }, []);

  // función para manejar el botón de editar
  const handleEditClick = () => {
    setEditable(!editable); // Cambia el estado de editable al hacer clic
  };

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (name, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  // Función para enviar los datos del formulario
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setShowSuccessMessage(true);
    } catch (error) {
      console.error("Error submitting changes:", error);
    } finally {
      setSubmitting(false);
      setEditable(false);
    }
  };

  //   función para ir al inicio de la página para mostrar mensaje de error
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`profile-container ${editable ? "editable" : ""}`}>
      {showSuccessMessage && (
        <div className="px-4 py-2 mt-4 text-center text-white bg-green-500 rounded">
          Cambios guardados exitosamente. Haga click en cancelar para salir del
          modo de edición.
          {goToTop()}
        </div>
      )}
      <div>
        <BackButton />
      </div>
      <div>
        <button onClick={handleEditClick}>
          {editable ? <p className="cancel-button">Cancelar</p> : "Editar"}
        </button>
      </div>

      <div className={`profile-edit ${editable ? "" : "hidden"}`}>
        <Usuario
          initialValues={userData}
          onSubmit={handleSubmit}
          onChange={handleChange}
          editable={editable}
          setShowSuccessMessage={setShowSuccessMessage}
        />
      </div>
    </div>
  );
};

export default editUser;
