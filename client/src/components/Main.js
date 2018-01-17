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
        <br />

        <div className="card-group">        

            <div className="card">
              <div className="card-header">
                Featured
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
              </ul>
            </div>

            <div className="card">
              <div className="card-header">
                Featured
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
              </ul>
            </div>

            <div className="card">
              <div className="card-header">
                Featured
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
              </ul>
            </div>

            <div className="card">
              <div className="card-header">
                Featured
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
              </ul>
            </div>

            <div className="card">
              <div className="card-header">
                Featured
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
                <li className="list-group-item list-group-item-primary"></li>
                <li className="list-group-item list-group-item-secondary"></li>
              </ul>
            </div>
          
        </div>



        <table className="table table-striped">

            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Test</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>


          <button type="button" className="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>



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