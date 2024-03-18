import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/components/Home/NavBar/NavBar.css";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import logo from "@/public/assets/logobigua.jpeg";

export default function NavBar() {
  return (
    <div className="bg-white shadow p-4">
      <div className="flex items-center justify-between max-w-4x1 mx-auto ml-4">
        <div className="flex items-center">
          <Image src={logo} alt="elbigua_logo" width={50} height={50}></Image>
          <h1 className="ml-2 text-xl font-bold">El Bigua</h1>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/">
            <button
              type="button"
              style={{ backgroundColor: "#d8b104" }}
              className="p-2"
            >
              Inicio{" "}
            </button>
          </Link>
          <Link href="/usuario">
            <button
              type="button"
              style={{ backgroundColor: "#d8b104" }}
              className="p-2"
            >
              Nuevo Cliente
            </button>
          </Link>
          <Link href="/editUsuario">
            <button
              type="button"
              style={{ backgroundColor: "#d8b104" }}
              className="p-2"
            >
              Editar Cliente
            </button>
          </Link>
          <input
            type="text"
            placeholder="Buscar cliente"
            className="border rounded px-2 py-1 mr-4"
          ></input>
          <button>
            <MagnifyingGlass size={30} color="#d8b104" />
          </button>
        </div>
      </div>
    </div>
  );
}
