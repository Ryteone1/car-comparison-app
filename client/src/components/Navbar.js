import React from "react";
import { Link } from "react-router";

const Navbar = () => (
  
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
          <Link className="navbar-brand" to="/">Ryte-Auto  Comparisons</Link>
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
  

);
  

export default Navbar;