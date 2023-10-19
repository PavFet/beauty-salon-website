import React from 'react';
import './index.scss';

function ProcedureIcon({
  text, img, action, classes,
}) {
  return (
    <div
      onClick={action}
      className={classes}
    >
      <img className="procedure-img" src={img} alt={text} />
      <h6 className="procedure-title">{text}</h6>
    </div>
  );
}

export default ProcedureIcon;
