// Include React as a dependency
import React, { Component } from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link

import { Link } from "react-router";
import Navbar from "./Navbar";
import Fixedarea from "./Fixedarea";
import Cards from "./Cards";
import Vehiclespecs from "./Vehiclespecs";



// Create the Main component
class Main extends Component {

  render() {

    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
      <div className="container-fluid">
         
        <Navbar />
        <Fixedarea />
        <Cards />

        <div className="card">
          <div className="card-header">
            Featured
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-primary">Cras justo odio</li>
            <li className="list-group-item list-group-item-secondary">Dapibus ac facilisis in</li>
            <li className="list-group-item list-group-item-primary">Cras justo odio</li>
            <li className="list-group-item list-group-item-secondary">Dapibus ac facilisis in</li>
            <li className="list-group-item list-group-item-primary">Cras justo odio</li>
            <li className="list-group-item list-group-item-secondary">Dapibus ac facilisis in</li>
            <li className="list-group-item list-group-item-primary">Cras justo odio</li>
            <li className="list-group-item list-group-item-secondary">Dapibus ac facilisis in</li>
            <li className="list-group-item list-group-item-primary">Cras justo odio</li>
            <li className="list-group-item list-group-item-secondary">Dapibus ac facilisis in</li>
            <li className="list-group-item list-group-item-primary">Cras justo odio</li>
            <li className="list-group-item list-group-item-secondary">Dapibus ac facilisis in</li>
          </ul>
        </div>



        <Vehiclespecs />   


        <footer>
          <hr />
          <p className="pull-right">
            <i className="fa fa-github" aria-hidden="true"></i>
            Proudly built using React.js
          </p>
        </footer>

        
      </div>
    );
  }
};

// Export the module back to the route
export default Main;