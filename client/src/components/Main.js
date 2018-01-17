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

        <div className="card-group bg-primary mb-3">        

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
                <th scope="col">MSRP</th>
                <th scope="col">$32,500</th>
                <th scope="col">$33,800</th>
                <th scope="col">$34,900</th>
                <th scope="col">$35,100</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>ll</td>
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

          <i className="fa fa-info-circle" aria-hidden="true" href="#" data-toggle="popover" data-placement="right" title="Popover Header" data-content="Some content inside the popover"></i>

           <i className="fa fa-info-circle" aria-hidden="true" href="#" tabIndex="0" data-toggle="popover" data-placement="right" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"></i>

           <a tabindex="0" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>


              <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>


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