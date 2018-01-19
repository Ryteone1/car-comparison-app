import React from "react";
import { Link } from "react-router";
{/*
state = {
  trim: "Select Trim"
}

handleTrim = () => {
  this.setState({ trim: })

}
*/}

const styles = {
  
  boxShadow: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: 5
  },

  background: {
    backgroundColor: "#ecf0f1"
  }
  
};

const Cards = props => (
  
  <div style={styles.boxShadow} className="card-group">
    <div style={styles.background} className="card text-center">            
      <div className="card-body">
        <a style={styles.boxShadow} className="btn btn-primary btn-sm text-center" href="#" role="button">New Comparison</a>
      </div>
    </div>          
    

    <div className="card text-center">
      <img className="card-img-top" src={props.image} alt="Card image cap" />
      <div className="card-body">

        <div style={styles.boxShadow} className="dropdown">
          <button className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Trim
          </button>

           <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">FWD 4dr XLT
              <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>
            </a> 

            <a className="dropdown-item" href="#">FWD 4dr Limited
              <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>
            </a> 

            <a className="dropdown-item" href="#">Trim 3
              <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>
            </a> 
          </div>

        </div>
        
      </div> 
      
    </div> {/* END OF CARD */}

    <div className="card text-center">
      <img className="card-img-top" src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014HON011b_320/2014HON011b_320_01.png" alt="Card image cap" />
      <div className="card-body">

        <div style={styles.boxShadow} className="dropdown">
          <a className="btn btn-secondary dropdown-toggle btn-sm btn-block" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Trim
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Trim 1
              <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>
            </a> 

            <a className="dropdown-item" href="#">Trim 2
              <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>
            </a> 

            <a className="dropdown-item" href="#">Trim 3
              <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>
            </a> 
          </div>

        </div>

      </div>
      
    </div> {/* END OF CARD */}

    <div className="card text-center">
      <img className="card-img-top" src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014NIS008a_320/2014NIS008a_320_01.png" alt="GMC Acadia" alt="Card image cap" />
      <div className="card-body">

        <div style={styles.boxShadow} className="dropdown">
          <a className="btn btn-secondary dropdown-toggle btn-sm btn-block" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Trim
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Trim 1
              <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>
            </a> 

            <a className="dropdown-item" href="#">Trim 2
              <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>
            </a> 

            <a className="dropdown-item" href="#">Trim 3
              <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>
            </a> 
          </div>

        </div>

      </div>
      
    </div> {/* END OF CARD */}

    <div className="card text-center">
      <img className="card-img-top" src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014CHE019a_320/2014CHE019a_320_01.png" alt="Chevy Traverse" alt="Card image cap" />
      <div className="card-body">

        <div style={styles.boxShadow} className="dropdown">
          <a className="btn btn-secondary dropdown-toggle btn-sm btn-block" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Trim
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Trim 1
              <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>
            </a> 

            <a className="dropdown-item" href="#">Trim 2
              <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>
            </a> 

            <a className="dropdown-item" href="#">Trim 3
              <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>
            </a> 
          </div>

        </div>

      </div>
      
    </div> {/* END OF CARD */}



  </div>


);
  

export default Cards;