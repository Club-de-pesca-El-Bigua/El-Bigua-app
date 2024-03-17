'use client'
import React from "react";
import AddUserForm from "@/components/Forms/agregarUsuario/agregarUsuario";

//import  useRouter 
//import createUser 

const AgregarUsuarioPage = () => {
 // const router = useRouter();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Aquí llamas a la función para crear un nuevo usuario en tu API
      await createUser(values);

      // Rediriges a la página de inicio u otra página después de agregar el usuario exitosamente
      router.push("/inicio");
    } catch (error) {
      console.error("Error al agregar usuario:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Agregar Nuevo Usuario</h1>
      <AddUserForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AgregarUsuarioPage;
