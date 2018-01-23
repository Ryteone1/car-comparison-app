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
  },

  background: {
  	backgroundColor: "#ecf0f1"
  }
};

const CompareCard = () => (

<div style={styles.background} className="card text-center">
  <div style={styles.topbutton} className="dropdown">
  {/* <button style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Year
  </button> */}
 
    <select name="car-years" id="car-years" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button">Select Year</select>  
  </div>

  <br />

  <div style={styles.padding} className="dropdown"> 
    <select name="car-makes" id="car-makes" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" ></select> 
  </div>

  <br />

  <div style={styles.padding} className="dropdown">
    <select name="car-models" id="car-models" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" ></select>  
  </div>

  <br />

  <div style={styles.bottombutton} className="dropdown">
    <select name="car-model-trims" id="car-model-trims" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" ></select>   
  </div>

  <br />

      <div style={styles.bottombutton} className="dropdown">
        <input id="cq-show-data" type="button" value="Go" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" />
      </div>
      

</div>


);
  

export default CompareCard;