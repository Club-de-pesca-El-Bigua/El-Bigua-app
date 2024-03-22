"use client";
import style from "./Card.module.css";
import Table from "./Table";

export default function Card(viewList) {
  const filteredTrue = viewList?.viewList.filter(
    (item) => item.status === true
  );
  const filteredFalse = viewList?.viewList.filter(
    (item) => item.status === false
  );

  return (
    <div className="flex flex-col gap-10">
      <div className={style.cardContainer}>
        <Table flteredBy={filteredTrue} />
      </div>
      <div className={style.cardContainer}>
        <Table flteredBy={filteredFalse} />
      </div>
    </div>
  );
}
