import React from 'react';
import ProcedureIcon from './Procedure';
import './index.scss';
import ProcedureDescription from './ProcedureDescription';

function OurServices() {
  const textForFacials = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged";
  const [activeProcedure, setActiveProcedure] = React.useState('Facials');
  return (
    <>
      <h3 id="our-services-section" className="title-black our-service">Our Services</h3>
      <p className="main-text text-center my-1">
        Spread over two floors, our beautiful spa offer a soothing environment
        in which you can rest, relax and feel competely rejuvenated.
      </p>
      <p className="main-text text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        remaining essentially unchanged. It was popularised in the with theLorem Ipsum is
        simply dummy
        text of the printing and eentially unchanged.
      </p>
      <div className="procedures">
        <ProcedureIcon
          img="./img/facials.png"
          text="Facials"
          action={() => setActiveProcedure('Facials')}
          classes={`${activeProcedure === 'Facials' ? 'procedure-single-active' : ''} procedure-single`}
        />
        <ProcedureIcon
          img="./img/waxing.png"
          text="Waxing"
          action={() => setActiveProcedure('Waxing')}
          classes={`${activeProcedure === 'Waxing' ? 'procedure-single-active' : ''} procedure-single`}
        />
        <ProcedureIcon
          img="./img/eyelash.png"
          text="Eyelash"
          action={() => setActiveProcedure('Eyelash')}
          classes={`${activeProcedure === 'Eyelash' ? 'procedure-single-active' : ''} procedure-single`}
        />
        <ProcedureIcon
          img="./img/nails.png"
          text="Nails"
          action={() => setActiveProcedure('Nails')}
          classes={`${activeProcedure === 'Nails' ? 'procedure-single-active' : ''} procedure-single`}
        />
        <div className="procedure-line" />
      </div>
      {activeProcedure === 'Facials'
        && <ProcedureDescription img="./img/facial-desc.jpg" procedureTitle="Facials" procedureText={textForFacials} />}
      {activeProcedure === 'Waxing'
        && <ProcedureDescription img="./img/waxing-desc.jpg" procedureTitle="Waxing" procedureText={textForFacials} />}
      {activeProcedure === 'Eyelash'
        && <ProcedureDescription img="./img/eyelash-desc.jpg" procedureTitle="Eyelash" procedureText={textForFacials} />}
      {activeProcedure === 'Nails'
        && <ProcedureDescription img="./img/nails-desc.jpg" procedureTitle="Nails" procedureText={textForFacials} />}
    </>
  );
}

export default OurServices;
