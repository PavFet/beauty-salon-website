import React from 'react';

function ProcedureDescription({ procedureTitle, procedureText, img }) {
  return (
    <div className="procedure-container">
      <div className="procedure-desc-img">
        <img src={img} alt={procedureTitle} />
      </div>
      <div className="procedure-desc-container">
        <h6 className="subtitle">{procedureTitle}</h6>
        <div className="procedure-desc-text">{procedureText}</div>
      </div>
    </div>
  );
}

export default ProcedureDescription;
