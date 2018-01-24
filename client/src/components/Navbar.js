import React from "react";
import { Link } from "react-router";

const styles = {
  brand: {
    fontSize: 25 
  },

  boxShadow: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: 5
  }
};

const Navbar = () => (

  <nav style={styles.boxShadow} className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a style={styles.brand} className="navbar-brand" href="#">Ryte-Auto Comparisons</a>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav justify-content-end">
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