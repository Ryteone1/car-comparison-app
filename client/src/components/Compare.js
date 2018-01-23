import React from "react";
import { Link } from "react-router";
import CompareCard from "./CompareCard";

const styles = { 
  boxShadow: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: 5
  },

  background: {
    backgroundColor: "#ecf0f1"
  },

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
  }
  
};


const Compare = () => (
  <div>

   <div style={styles.boxShadow} className="card-group text-center">

    <div style={styles.background} className="card">            
        <div className="card-body">
          <a style={styles.boxShadow} className="btn btn-primary btn-sm text-center" href="#" role="button">New Comparison</a>
        </div>
    </div> 


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

      <div style={styles.padding} className="dropdown">
        <select name="car-model-trims" id="car-model-trims" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" ></select>   
      </div>

      <br />

      <div style={styles.bottombutton} className="dropdown">
        <input id="cq-show-data" type="button" value="Go" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" />
      </div>

    </div> {/* END OF SECTION */}


    <div style={styles.background} className="card text-center">
      <div style={styles.topbutton} className="dropdown">
      {/* <button style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Year
      </button> */}
     
        <select name="car-years2" id="car-years2" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button">Select Year</select>  
      </div>

      <br />

      <div style={styles.padding} className="dropdown"> 
        <select name="car-makes2" id="car-makes2" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" ></select> 
      </div>

      <br />

      <div style={styles.padding} className="dropdown">
        <select name="car-models2" id="car-models2" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" ></select>  
      </div>

      <br />

      <div style={styles.padding} className="dropdown">
        <select name="car-model-trims2" id="car-model-trims2" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" ></select>   
      </div>

      <br />

      <div style={styles.bottombutton} className="dropdown">
        <input id="cq-show-data" type="button" value="Go" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" />
      </div>

    </div> {/* END OF SECTION */}


    <div style={styles.background} className="card text-center">
      <div style={styles.topbutton} className="dropdown">
      {/* <button style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Year
      </button> */}
     
        <select name="car-years3" id="car-years3" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button">Select Year</select>  
      </div>

      <br />

      <div style={styles.padding} className="dropdown"> 
        <select name="car-makes3" id="car-makes3" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" ></select> 
      </div>

      <br />

      <div style={styles.padding} className="dropdown">
        <select name="car-models3" id="car-models3" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" ></select>  
      </div>

      <br />

      <div style={styles.padding} className="dropdown">
        <select name="car-model-trims3" id="car-model-trims3" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" ></select>   
      </div>

      <br />

      <div style={styles.bottombutton} className="dropdown">
        <input id="cq-show-data" type="button" value="Go" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" />
      </div>

    </div> {/* END OF SECTION */}


    <div style={styles.background} className="card text-center">
      <div style={styles.topbutton} className="dropdown">
      {/* <button style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Year
      </button> */}
     
        <select name="car-years4" id="car-years4" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button">Select Year</select>  
      </div>

      <br />

      <div style={styles.padding} className="dropdown"> 
        <select name="car-makes4" id="car-makes4" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" ></select> 
      </div>

      <br />

      <div style={styles.padding} className="dropdown">
        <select name="car-models4" id="car-models4" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" ></select>  
      </div>

      <br />

      <div style={styles.padding} className="dropdown">
        <select name="car-model-trims4" id="car-model-trims4" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" ></select>   
      </div>

      <br />

      <div style={styles.bottombutton} className="dropdown">
        <input id="cq-show-data" type="button" value="Go" style={styles.boxShadow} className="btn btn-secondary dropdown-toggle btn-sm btn-block" />
      </div>


    </div> {/* END OF SECTION */}

   
    
 </div>

 </div>
  
 
);
  

export default Compare;