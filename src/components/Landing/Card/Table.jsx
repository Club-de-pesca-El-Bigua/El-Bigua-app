import React from "react";
import { SignOut, Anchor } from "@phosphor-icons/react/dist/ssr";

export default function Table(flteredBy) {
  const AnchorLogo = <Anchor color="#22c55e" />;
  const SignOutLogo = <SignOut color="#ef4444" />;

  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return (
    <table className="">
      <thead className="">
        <tr>
          <th scope="col">Estado</th>
          <th scope="col">Accion</th>
          <th scope="col">Matricula</th>
          <th scope="col">Tipo</th>
          <th scope="col">Color</th>
          <th scope="col">Capacidad</th>
          <th scope="col">Marca</th>
          <th scope="col">Nom Embarcación</th>
          <th scope="col">Nom Usuario</th>
          <th scope="col">Telefono</th>
          <th scope="col">DNI</th>
          <th scope="col">Vehiculo</th>
          <th scope="col">Fecha Ingreso</th>
        </tr>
      </thead>
      <tbody>
        {flteredBy?.flteredBy.map((item, index) => {
          const entryDate = new Date(item.entry.date);

          return (
            <tr key={index}>
              <th scope="row">
                <figure>{item.status ? AnchorLogo : SignOutLogo}</figure>
              </th>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
              <td className="px-6 py-4">{item.boat.matricula}</td>
              <td className="px-6 py-4 max-w-24 text-balance">
                {item.boat.type}
              </td>
              <td className="px-6 py-4">{item.boat.color}</td>
              <td className="px-6 py-4">{item.boat.capacity}</td>
              <td className="px-6 py-4 max-w-9 text-balance">
                {item.boat.brand}
              </td>
              <td className="px-6 py-4">{item.boat.name}</td>
              <td className="px-6 py-4">{item.user.name}</td>
              <td className="px-6 py-4">{item.user.phone}</td>
              <td className="px-6 py-4">{item.user.dni}</td>
              <td className="px-6 py-4 max-w-9 text-balance">
                {item.user.vehiculo}
              </td>
              <td className="px-6 py-4 max-w-9 min-w-36 text-balance">
                {entryDate.toLocaleDateString("es-ES", dateOptions)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
