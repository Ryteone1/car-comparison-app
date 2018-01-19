import React from "react";
import { Link } from "react-router";
import CompareCard from "./CompareCard";

const styles = {
 
  boxShadow: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: 5
  }
  
};


const Compare = () => (

   <div style={styles.boxShadow} className="card-group text-center">

    <div className="card">            
        <div className="card-body">
          <a className="btn btn-primary btn-sm text-center" href="#" role="button">New Comparison</a>
        </div>
    </div> 

    <CompareCard />
    <br />
    <CompareCard />
    <br />
    <CompareCard />
    <br />
    <CompareCard />
    <br />
    
 </div>
  
 
);
  

export default Compare;