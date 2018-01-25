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

 constructor(props) {
    super(props);
    this.state = {    
      Cars: Cars,
      image: "http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014FRD007a_320/2014FRD007a_320_01.png"   
    };

   this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
 
  selectTrim = () => {
 
    this.setState({ 
      image: "http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014FRD007c_320/2014FRD007c_320_01.png"
     });
 
 
 
  };







 

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }




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
              image={car.image.image1} 
              popover={car.popover.popover1}
              heading={car.heading.heading1} />
              
              <DropdownItem 
              trim={car.trim.trim2} 
              image={car.image.image2}
              popover={car.popover.popover2}
              heading={car.heading.heading2} />
              <DropdownItem 
              trim={car.trim.trim3} 
              image={car.image.image3}
              popover={car.popover.popover3}
              heading={car.heading.heading3} />
            </Dropdown>

            </Card>

          ))}
        </Cards>


        <br />

        <Compare />
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
};

// Export the module back to the route
export default Main;