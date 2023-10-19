import React from 'react';
import Toolbar from './components/Header/Toolbar';
import AboutUs from './components/AboutUs/AboutUs';
import OurServices from './components/OurServices/OurServices';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <>
      <Toolbar />
      <AboutUs />
      <OurServices />
      <Courses />
    </>
  );
}

export default App;
