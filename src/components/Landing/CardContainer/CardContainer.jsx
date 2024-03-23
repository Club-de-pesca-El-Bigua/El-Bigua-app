"use client";

import Card from "@/components/Landing/Card/Card";
import getShips from "@/hooks/useShips";
import "./CardContainer.css";
import { useEffect, useState } from "react";

export default function CardContainer() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    getShips().then((data) => {
      setShips(data);
    });
  }, []);

  return (
    <div className="mx-8 my-8">
      <Card viewList={ships} />
    </div>
  );
}

