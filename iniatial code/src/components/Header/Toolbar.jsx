import React from 'react';
import './index.scss';

function Toolbar() {
  const [sidebarAction, setSidebarAction] = React.useState(false);
  const close = () => {
    setSidebarAction(!sidebarAction);
  };
  return (
    <header className="header">
      <nav>
        <div className="sidebar">
          <div className=" nav-container">
            <input onClick={close} className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className={sidebarAction ? 'line line1-opened' : 'line line1-closed'} />
              <span className={sidebarAction ? 'line line2-opened' : 'line line2-closed'} />
              <span className={sidebarAction ? 'line line3-opened' : 'line line3-closed'} />
            </div>
            <div className={sidebarAction ? 'display-none' : 'logo'} />
            <div className={sidebarAction ? 'menu-items opened' : 'menu-items closed'}>
              <li><a onClick={close} href="#about-us-section">About Us</a></li>
              <li><a onClick={close} href="#our-services-section">Our Services</a></li>
              <li><a onClick={close} href="#courses">Courses</a></li>
              <li><a onClick={close} href="#booking-section">Booking</a></li>
              <li><a onClick={close} href="#contact-us-section">Contact Us</a></li>
            </div>
          </div>
        </div>
      </nav>
      <nav>
        <div className="navbar">
          <div className="logo-desktop" />
          <div className="menu-items-desktop">
            <li><a href="#about-us-section">About Us</a></li>
            <li><a href="#our-services-section">Our Services</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#booking-section">Booking</a></li>
            <li><a href="#contact-us-section">Contact Us</a></li>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;
