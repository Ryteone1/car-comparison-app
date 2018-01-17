import React from "react";
import { Link } from "react-router";


const Cards = () => (
  
  <div className="card-group">
    <div className="card">            
      <div className="card-body">
        <a className="btn btn-primary btn-sm" href="#" role="button">New Comparison</a>
      </div>
    </div>          
    

    <div className="card">
      <img className="card-img-top" src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014FRD007a_320/2014FRD007a_320_01.png" alt="Card image cap" />
      <div className="card-body">

        <div className="dropdown show">
          <a className="btn btn-secondary dropdown-toggle btn-sm" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Trim
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Trim 1
              <i className="fa fa-info-circle" aria-hidden="true" href="#" data-toggle="popover" data-placement="right" title="Popover Header" data-content="Some content inside the popover"></i></a>

            <a className="dropdown-item" href="#">Trim 2<i className="fa fa-info-circle" aria-hidden="true" href="#" data-toggle="popover" data-placement="right" title="Popover Header" data-content="Some content inside the popover"></i></a>

            <a className="dropdown-item" href="#">Trim 3<i className="fa fa-info-circle" aria-hidden="true" href="#" data-toggle="popover" data-placement="right" title="Popover Header" data-content="Some content inside the popover"></i></a>
          </div>
        </div>
        
      </div> 
      
    </div> {/* END OF CARD */}

    <div className="card">
      <img className="card-img-top" src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014HON011b_320/2014HON011b_320_01.png" alt="Card image cap" />
      <div className="card-body">

        <div className="dropdown show">
          <a className="btn btn-secondary dropdown-toggle btn-sm" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Trim
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Trim 1<i className="fa fa-info-circle" aria-hidden="true" href="#" data-toggle="popover" data-placement="right" title="Popover Header" data-content="Some content inside the popover">Toggle popover</i></a>
            <a className="dropdown-item" href="#">Trim 2<i className="fa fa-info-circle" aria-hidden="true" href="#" data-toggle="popover" data-placement="right" title="Popover Header" data-content="Some content inside the popover">Toggle popover</i></a>
            <a className="dropdown-item" href="#">Trim 3<i className="fa fa-info-circle" aria-hidden="true" href="#" data-toggle="popover" data-placement="right" title="Popover Header" data-content="Some content inside the popover">Toggle popover</i></a>
          </div>
        </div>

      </div>
      
    </div> {/* END OF CARD */}

    <div className="card">
      <img className="card-img-top" src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014NIS008a_320/2014NIS008a_320_01.png" alt="GMC Acadia" alt="Card image cap" />
      <div className="card-body">

        <div className="dropdown show">
          <a className="btn btn-secondary dropdown-toggle btn-sm" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Trim
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Trim 1<i className="fa fa-info-circle" aria-hidden="true" href="#" data-toggle="popover" data-placement="right" title="Popover Header" data-content="Some content inside the popover">Toggle popover</i></a>
            <a className="dropdown-item" href="#">Trim 2<i className="fa fa-info-circle" aria-hidden="true" href="#" data-toggle="popover" data-placement="right" title="Popover Header" data-content="Some content inside the popover">Toggle popover</i></a>
            <a className="dropdown-item" href="#">Trim 3<i className="fa fa-info-circle" aria-hidden="true" href="#" data-toggle="popover" data-placement="right" title="Popover Header" data-content="Some content inside the popover">Toggle popover</i></a>
          </div>
        </div>

      </div>
      
    </div> {/* END OF CARD */}

    <div className="card">
      <img className="card-img-top" src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014CHE019a_320/2014CHE019a_320_01.png" alt="Chevy Traverse" alt="Card image cap" />
      <div className="card-body">

        <div className="dropdown show">
          <a className="btn btn-secondary dropdown-toggle btn-sm" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Trim
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Trim 1<i className="fa fa-info-circle" aria-hidden="true" href="#" data-toggle="popover" data-placement="right" title="Popover Header" data-content="Some content inside the popover">Toggle popover</i></a>
            <a className="dropdown-item" href="#">Trim 2<i className="fa fa-info-circle" aria-hidden="true" href="#" data-toggle="popover" data-placement="right" title="Popover Header" data-content="Some content inside the popover">Toggle popover</i></a>
            <a className="dropdown-item" href="#">Trim 3<i className="fa fa-info-circle" aria-hidden="true" href="#" data-toggle="popover" data-placement="right" title="Popover Header" data-content="Some content inside the popover">Toggle popover</i></a>
          </div>
        </div>

      </div>
      
    </div> {/* END OF CARD */}

  </div>


);
  

export default Cards;