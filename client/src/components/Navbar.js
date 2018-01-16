import React from "react";
import { Link } from "react-router";

const styles = {
  brand: {
    fontSize: 25 
  }
};


const Navbar = () => (


  <div>


  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#">Ryte-Auto Comparison</a>
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
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>


  
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-ex1-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link style={styles.brand} className="navbar-brand" to="/">Ryte-Auto  Comparisons</Link>
        </div>

        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav navbar-right">
            {/* Using <Link> in place of <a> and "to" in place of "href" */}
            <li><Link to="/search">Cars for Sale</Link></li>
            <li><Link to="/saved">Research</Link></li>
          </ul>
        </div>
      </div>
    </nav>

  </div>
  

);
  

export default Navbar;