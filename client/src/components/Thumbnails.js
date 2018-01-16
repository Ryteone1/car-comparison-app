import React from "react";
import { Link } from "react-router";

const styles = {  
  column: {
    padding: 0
  }

};


const Thumbnails = () => (
  
  <div className="container">  

    <div className="row"> {/* ROW CONTAINING THUMBNAILS IMAGES OF VEHICLE */}

      <div style={styles.column} className="col-sm-2 col-md-2">
        <div className="thumbnail">                    
          <div className  ="caption">
            <a href="#" className="btn btn-primary btn-xs" role="button">New Comparison</a>                      
         </div>
        </div>
      </div>     

      <div style={styles.column} className="col-sm-2 col-md-2">
        <div className="thumbnail">
          <img src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014FRD007a_320/2014FRD007a_320_01.png" alt="Ford Explorer" />          

          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle btn-xs" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Dropdown
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Trim 1<i className="fa fa-info-circle" aria-hidden="true"></i></a></li>
              <li><a href="#">Trim 2</a></li>
              <li><a href="#">Trim 3</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>

        </div>
      </div>         

  
      <div style={styles.column} className="col-sm-2 col-md-2">
        <div className="thumbnail">
          <img src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014HON011b_320/2014HON011b_320_01.png" />
          
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle btn-xs" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Dropdown
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Trim 1<i className="fa fa-info-circle" aria-hidden="true" href="#" data-toggle="popover" data-placement="right" title="Popover Header" data-content="Some content inside the popover">Toggle popover</i></a></li>
              <li><a href="#">Trim 2</a></li>
              <li><a href="#">Trim 3</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>

        </div>
      </div>
 
  
      <div style={styles.column} className="col-sm-2 col-md-2">
        <div className="thumbnail">
          <img src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014NIS008a_320/2014NIS008a_320_01.png" alt="GMC Acadia" />  

          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle btn-xs" type="button" id="dropdownMenu1" data-toggle="dropdown" data-placement="right" aria-haspopup="true" aria-expanded="true">
              Dropdown
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Trim 1<i className="fa fa-info-circle" aria-hidden="true"></i></a></li>
              <li><a href="#">Trim 2</a></li>
              <li><a href="#">Trim 3</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>    

        </div>                  
      </div>             


      <div style={styles.column} className="col-sm-2 col-md-2">
        <div className="thumbnail">
          <img src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014CHE019a_320/2014CHE019a_320_01.png" alt="Chevy Traverse" />  

          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle btn-xs" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Dropdown
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Trim 1<i className="fa fa-info-circle" aria-hidden="true" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover></i></a></li>
              <li><a href="#">Trim 2</a></li>
              <li><a href="#">Trim 3</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div> 

        </div>
      </div>
 
    </div> {/* END OF THUMBNAIL ROW */}  
  </div>


);
  

export default Thumbnails;