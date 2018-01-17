import React from "react";
import { Link } from "react-router";

const styles = {
  brand: {
    fontSize: 25 
  }
};

const Navbar = () => (

  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a style={styles.brand} className="navbar-brand" href="#">Ryte-Auto Comparisons</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-
      icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Research Cars</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cars for Sale</a>
        </li>        
      </ul>
    </div>
  </nav>
  

);
  

export default Navbar;