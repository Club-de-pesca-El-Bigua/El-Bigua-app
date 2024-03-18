import React from "react";
import Link from "next/link"; // Importa el componente Link de Next.js
import Image from "next/image";
import NavBar from "../components/Home/NavBar/NavBar";
import ShipSearchBar from "@/components/Home/ShipSearchBar/shipSearchBar";
import Filter from "@/components/Home/Filter/Filter";
import CardContainer from "@/components/CardContainer/CardContainer";

const HomePage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ShipSearchBar></ShipSearchBar>
      <div className="mx-8">
        <hr className="my-4 border-gray-300 " />
      </div>
      <Filter></Filter>
      <CardContainer></CardContainer>
    </div>
    // <div>
    //   <h1>El Bigua</h1>
    //   {/* Botones para redirigir a las páginas correspondientes */}

    // </div>
  );
};

export default HomePage;
