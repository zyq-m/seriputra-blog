import React from "react";
import pdf from "../file/laporan-kumpulan-3.pdf";

const viewPDF = () => {
  return (
    <div className="view">
      <embed src={pdf} type="application/pdf" />
    </div>
  );
};

export default viewPDF;
