import React from "react";
import { Link } from "react-router";
import "./Main.css";
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

const Dropdown = (props) => (

  <div className="dropdown boxShadow">
    <button className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select Trim
    </button>

    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {props.children}          
    </div>

  </div>
  

);
  

export default Dropdown;      








       