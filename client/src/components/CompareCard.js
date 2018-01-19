import React from "react";
import { Link } from "react-router";

const styles = {
	padding: {
		paddingRight: 20,
		paddingLeft: 20	
	},

	topbutton: {
		paddingTop: 20,
		paddingRight: 20,
		paddingLeft: 20
	},

	bottombutton: {
		paddingBottom: 20,
		paddingRight: 20,
		paddingLeft: 20
	},

	boxShadow: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: 5
  }
};

const CompareCard = () => (

<div className="card text-center">
<div style={styles.topbutton}className="dropdown">
  <button style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Year
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">2018</a>
    <a className="dropdown-item" href="#">2017</a>
    <a className="dropdown-item" href="#">2016</a>
    <a className="dropdown-item" href="#">2015</a>
    <a className="dropdown-item" href="#">2014</a>
    <a className="dropdown-item" href="#">2013</a>
  </div>
</div>

<br />

<div style={styles.padding} className="dropdown">
  <button style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Make
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>

<br />

<div style={styles.padding} className="dropdown">
  <button style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Model
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>

<br />

<div style={styles.bottombutton} className="dropdown">
  <button style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Trim
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>
</div>


);
  

export default CompareCard;