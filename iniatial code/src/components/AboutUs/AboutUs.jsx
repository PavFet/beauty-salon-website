/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './index.scss';

function AboutUs() {
  // "Discover your inner beauty, let us bring it to life."
  return (
    <>
      <div className="hero">
        <img className="logo-hero" src="./img/logo-black-white.svg" alt="" />
        <img className="hero-img" src="./img/inside.jpeg" alt="" />
      </div>
      <div id="about-us-section" className="about-us">
        <div className="about-us-img-and-frame">
          <img className="about-us-img" src="./img/about-us.png" alt="" />
          <div className="golden-frame" />
        </div>
        <div className="about-us-content">
          <h6 className="subtitle">Welcome to Spa Center</h6>
          <p className="about-us-content-text main-text ">
            Spread over two floors, our beautiful spa offer a soothing environment
            in which you can rest, relax and feel competely rejuvenated.
          </p>
          <p className="main-text ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. remaining essentially unchanged. It was popularised in the with
            theLorem Ipsum is simply dummy text of the printing and eentially unchanged
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
