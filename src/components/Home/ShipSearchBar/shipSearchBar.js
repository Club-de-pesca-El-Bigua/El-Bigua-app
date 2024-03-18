import React from "react";
import "@/components/Home/ShipSearchBar/ShipSearchBar.css";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

export default function ShipSearchBar() {
  return (
    <div className="flex items-center justify-between p-7 ml-7">
      <div className="flex items-center">
        <h1>Buscar por:</h1>
        <input
          type="text"
          placeholder="dd/mm/aa"
          className="border rounded px-2 py-1 ml-4"
          style={{ marginRight: "auto" }}
        ></input>
        <button className="p-2">
          <MagnifyingGlass size={30} color="#d8b104" />
        </button>
      </div>
      <div className="flex items-center ">
        <h1 className="mr-7 text-xl font-bold">
          SISTEMA DE GESTIÓN DE BARCAZAS
        </h1>
      </div>
    </div>
  );
}
