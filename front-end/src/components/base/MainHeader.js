import React from 'react';
import logo from 'static/images/logo.png';
import logoColor from 'static/images/logo-colored-small.png';
import './MainHeader.scss';

const MainHeader = () => (
  <div
    className="header--standard header--standard-landing"
    id="header--standard"
  >
    <div className="container">
      <div className="header--standard-wrap">
        <a href="/asdfas" className="logo">
          <div className="img-wrap">
            <img src={logo} alt="Olympus" />
            <img src={logoColor} alt="Olympus" className="logo-colored" />
          </div>
          <div className="title-block">
            <h6 className="logo-title">olympus</h6>
            <div className="sub-title">SOCIAL NETWORK</div>
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default MainHeader;
