import React from "react";
import "../CardContainer/CardContainer.css";
import Card from "../Home/Card/Card";

export default function CardContainer() {
  return (
    <div className="p-3">
      <ul>
        <Card></Card>
      </ul>
      <ul>
        <Card></Card>
      </ul>
      <ul>
        <Card></Card>
      </ul>
      <ul>
        <Card></Card>
      </ul>
    </div>
  );
}
