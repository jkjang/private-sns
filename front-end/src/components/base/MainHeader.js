import React from 'react';
import './MainHeader.scss';
import logoImage from 'process.env';

const MainHeader = () => (
  <div className="main-header main-landing">
    <div className="content-bg-wrap bg-landing"/>
    <div className="container">
      <div className="row"/>]
      <div className="col col-lg-6 m-auto col-md-12 col-sm-12 col-12">
        <div className="main-header-content"/>
        <a href="#aa" className="logo">
          <div className="img-wrap">
            <img src={process.env.src.} alt="Olympus"/>
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default MainHeader;
