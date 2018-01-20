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


const Card = (props) => (     


    <div className="card text-center">
      <img className="card-img-top" alt="Card image cap" src={props.image}/>
      <div className="card-body">

        <div className="dropdown boxShadow">
          <button className="btn btn-secondary dropdown-toggle btn-sm btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Trim
          </button>

           <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">{props.name}
              <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>
            }
            }
            </a> 

            <a className="dropdown-item" href="#">{props.name}
              <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>
            }
            </a> 

            <a className="dropdown-item" href="#">{props.name}
              <i className="fa fa-info-circle pull-right" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="hover" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>
            }
            </a> 
          </div>

        </div>
        
      </div> 
      
    </div>




 


);
  

export default Card;