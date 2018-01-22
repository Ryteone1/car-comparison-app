import React from "react";
import { Link } from "react-router";
import "./Main.css";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

const styles = {
  brand: {
    fontSize: 25 
  },

  boxShadow: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: 5
  }
};


const Card = (props) => (   

  <div className="card text-center" id="remove1name">
    <img className="card-img-top" alt="Card image cap" src={props.image}/>
    <div className="card-body">     
      {props.children}
    </div>     
  </div>

);
  

export default Card;