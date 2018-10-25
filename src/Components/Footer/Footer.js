import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
  render() {
    const links =
      <div className="links-container">
        <a className="footer-links" href="https://www.esri.com/en-us/home">Esri</a>
        <a className="footer-links" href="https://www.esri.com/en-us/about/careers/job-search#@careerPath=@location=US-VA-Vienna@jobSearch=">Careers</a>
        <a className="footer-links" href="https://developers.arcgis.com/javascript/">ArcGIS JS API</a>
        <Link to="/about" className="footer-links">About</Link>
        <Link to="/contact-us" className="footer-links">Contact Us</Link>
      </div>;

    return (
      <div className="footer-container">
        {links}
      </div>
    );
  }
}

export default Footer;
