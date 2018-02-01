// Include React as a dependency
import React, { Component } from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link

import { Link } from "react-router";
import Navbar from "./Navbar";
import Fixedarea from "./Fixedarea";
import Card from "./Card";
import Cards from "./Cards";
import Vehiclespecs from "./Vehiclespecs";
import Cars from "./Cars.json"
import Compare from "./Compare";
import CompareCard from "./CompareCard";
import "./Main.css";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";



// Create the Main component
class Main extends Component {

    state = {    
      Cars: Cars,
      image: Cars[0].image.image1
       
    };
      

  
  selectTrim3 = () => {
 
    this.setState({image: Cars[0].image.image2});    

  };









 



  render() {

    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
      <div className="container-fluid">
         
        <Navbar />
        <br />
        <Fixedarea />

        <Cards>
          <div className="card text-center bg">            
            <div className="card-body">
              <a className="btn btn-primary btn-sm text-center boxShadow" href="#" role="button">New Comparison</a>
              <img className="card-img-top"/>
            </div>
          </div>  

          {this.state.Cars.map(car => (
            <Card 
              key={car.id}
              year={car.year}
              make={car.make}
              model={car.model} 
              image={car.image.image1}              
            >

            <Dropdown>
              <DropdownItem 
              
              trim={car.trim.trim1} 
              image={this.state.image} 
              popover={car.popover.popover1}
              heading={car.heading.heading1} />
              
              <DropdownItem 
              onClick={this.selectTrim2}       
              trim={car.trim.trim2} 
              image={this.state.image}
              popover={car.popover.popover2}
              heading={car.heading.heading2} />

              <DropdownItem 
              onClick={this.selectTrim3}
              trim={car.trim.trim3} 
              image={this.state.image}
              popover={car.popover.popover3}
              heading={car.heading.heading3} />
            </Dropdown>

            </Card>

          ))}
        </Cards>

        <br />
    
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
}

// Export the module back to the route
export default Main;