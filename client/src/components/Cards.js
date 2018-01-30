import React, { Component } from "react";
import { Link } from "react-router";
import Cars from "./Cars.json";
import Card from "./Card";
import "./Main.css";

const styles = {
  
  boxShadow: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: 5
  },

  background: {
    backgroundColor: "#ecf0f1"
  }
  
};

const Cards = props => {
  return(

    <div style={styles.boxShadow} className="card-group">
      {props.children}
    </div>

    )
};

  

export default Cards;