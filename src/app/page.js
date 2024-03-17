import React from 'react';
import Link from 'next/link'; // Importa el componente Link de Next.js

const HomePage = () => {
  return (
    <div>
      <h1>El Bigua</h1>
      {/* Botones para redirigir a las páginas correspondientes */}
      <div>
        <Link href="/usuario">
        
            <button type="button">Nuevo Cliente</button>
          
        </Link>
        <Link href="/editUsuario">
          
            <button type="button">Editar Cliente</button>
          
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
