"use client";
import React from "react";
import { useState } from "react";
import "@/components/Home/Card/Card.css";
import { SignOut } from "@phosphor-icons/react/dist/ssr";
import { Anchor } from "@phosphor-icons/react/dist/ssr";

const AnchorLogo = <Anchor size={43} color="#22c55e" />;
const SignOutLogo = <SignOut size={32} color="#ef4444" />;

export default function Card() {
  const [icon, setIcon] = useState(null);

  // Función para randomizar los iconos
  const randomizeIcon = () => {
    const randomNum = Math.random(); // Genera un número aleatorio entre 0 y 1
    // Si el número aleatorio es menor que 0.5, muestra el icono de Anchor, de lo contrario muestra el icono de SignOut
    setIcon(randomNum < 0.5 ? AnchorLogo : SignOutLogo);
  };

  useState(() => {
    randomizeIcon();
  }, []);

  return (
    <div className="mx-4 mb-4">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex flex-row">
          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <p className="font-semibold">Estado:</p>
            <div className="p-4">{icon}</div>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
            <p className="font-semibold">Matricula:</p>
            <p>Valor</p>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <p className="font-semibold">Tipo de embarcación:</p>
            <p>Valor</p>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <p className="font-semibold">Color:</p>
            <p>Valor</p>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <p className="font-semibold">Capacidad:</p>
            <p>Valor</p>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <p className="font-semibold">Marca:</p>
            <p>Valor</p>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <p className="font-semibold">Nombre de embarcación:</p>
            <p>Valor</p>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <p className="font-semibold">Adicional:</p>
            <p>Valor</p>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <p className="font-semibold">Nombre:</p>
            <p>Valor</p>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <p className="font-semibold">Teléfono:</p>
            <p>Valor</p>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <p className="font-semibold">DNI:</p>
            <p>Valor</p>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <p className="font-semibold">Vehículo:</p>
            <p>Valor</p>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <p className="font-semibold">Horario de ingreso:</p>
            <p>Valor</p>
          </div>
        </div>
      </div>
    </div>
  );
}
