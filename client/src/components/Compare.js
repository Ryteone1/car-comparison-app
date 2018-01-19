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

    <CompareCard />
    <br />
    <CompareCard />
    <br />
    <CompareCard />
    <br />
    <CompareCard />
    <br />
    
 </div>

 </div>
  
 
);
  

export default Compare;