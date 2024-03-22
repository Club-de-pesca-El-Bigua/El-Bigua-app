import React from "react";
import "./Filter.css";

export default function Filter() {
  return (
    <div className="flex ml-7">
      <button className="px-4 py-2 mr-2 text-white bg-green-500 rounded">
        Dentro
      </button>
      <button className="px-4 py-2 text-white bg-red-500 rounded">Fuera</button>
    </div>
  );
}
