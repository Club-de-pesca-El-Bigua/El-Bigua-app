"use client";
import * as XLSX from 'xlsx';
import style from "./Card.module.css";
import Table from "./Table";

export default function Card(viewList) {
  const filteredTrue = viewList?.viewList.filter(
    (item) => item.status === true
  );
  const filteredFalse = viewList?.viewList.filter(
    (item) => item.status === false
  );
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.table_to_sheet(document.querySelector('#false'));
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    const today = new Date();
    const filename = `movimientos_${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}.xlsx`;
    
    XLSX.writeFile(wb, filename);
  };

  const handleExport = () => {
    exportToExcel();
  }

  return (
    <div className="flex flex-col gap-10">
      <div className={style.cardContainer}>
        <Table flteredBy={filteredTrue} />
      </div>
      <div className={style.cardContainer} id="false">
        <button onClick={handleExport}>Descargar tabla</button>
        <Table flteredBy={filteredFalse} />
      </div>
    </div>
  );
}
