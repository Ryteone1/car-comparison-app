import React from "react";
import { Link } from "react-router";
import "./Main.css";

const styles = {
  brand: {
    fontSize: 25 
  },

  boxShadow: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: 5
  }
};




const DropdownItem= (props) => (

  <a className="dropdown-item" href="#" onClick={this.selectTrim3}>{props.trim}
    <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title={props.heading} data-content={props.popover}></i>      
  </a> 

  

);
  

export default DropdownItem;