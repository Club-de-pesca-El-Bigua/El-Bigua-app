import React from "react";
import "@/components/Home/Filter/Filter.css";

export default function Filter() {
  return (
    <div className="flex ml-7">
      <button className="mr-2 bg-green-500 text-white px-4 py-2 rounded">
        Dentro
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded">Fuera</button>
    </div>
  );
}
