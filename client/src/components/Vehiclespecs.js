import React from "react";
import { Link } from "react-router";



const Vehiclespecs = () => (

  <div>

  <table id="car-model-data" className="table table-bordered table-striped text-center ">

    <thead className="thead">
      <tr className="table-secondary">
        <th scope="col">MSRP   </th>
        <th scope="col">$32,500</th>
        <th scope="col">$33,800</th>
        <th scope="col">$34,900</th>
        <th scope="col">$35,100</th>
      </tr>
      <tr className="table-light">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </thead>
    <tbody>      
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
       <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
       <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
       <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

    </tbody>
  </table>


  <div className="dropdown boxShadow" name="car-years" id="car-years">
    <button className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" name="car-years" id="car-years">
      Select Trim
    </button>

    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

      <a className="dropdown-item" href="#">
        <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>      
      </a> 

    </div>

  </div>



  <select name="car-years" id="car-years" value="Select Year"></select>
  <br />  
  <select name="car-makes" id="car-makes"></select> 
  <br />
  <select name="car-models" id="car-models"></select>
  <br />
  <select name="car-model-trims" id="car-model-trims"></select> 

  <input id="cq-show-data" type="button" value="Go" />
  {/*<div id="car-model-data"></div> */}

 
  <div id="cq-search-result" style={{display:"none"}}></div>

  
</div>



);
  

export default Vehiclespecs;