import React from 'react';
import './index.scss';
import Carousel from './Carousel';

function Courses() {
  return (
    <>
      <h3 id="courses" className="title-black">Courses</h3>
      <p className="main-text text-center my-1">
        Spread over two floors, our beautiful spa offer a soothing environment
        in which you can rest, relax and feel competely rejuvenated.
      </p>
      <Carousel />
    </>
  );
}

export default Courses;
