import React from "react";
import "./Main.css";


const styles = {
  
  fixedarea: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "#ecf0f1",
    borderRadius: 5,
    border: "groove",
  },

  border: {
    borderLeft: "groove"
  },

  paddingTop: {
    paddingTop: 15,
    borderRightStyle: "groove"
  },

  moveRight: {
    position: "relative",
    left: 6,
    paddingRight: 20,
    paddingLeft: 20,
  }, 

  moveLeft: {
    position: "relative",
    right: 6,
    paddingRight: 20,
    paddingLeft: 20,
  },

  yearMake: {
    position: "relative",
    top: 6,
    paddingBottom: 6
  }

};


const Fixedarea = props => (

  <div style={styles.fixedarea} className="container-fluid"> {/* FIXED AREA CONTAINER */}

    <div className="row text-center"> {/* ROW ABOVE THUMBNAIL PICTURES CONTAINING CHANGE/REMOVE BUTTONS */}

      <div style={styles.paddingTop} className="col-sm">
        <h5>Comparing 1-4 of 4</h5>
      </div>

      <div style={styles.paddingTop} className="col-sm">
        <button type="button" style={styles.moveLeft} className="btn btn-primary btn-sm boxShadow">Change</button>
        <button type="button" style={styles.moveRight} className="btn btn-secondary btn-sm boxShadow" id="remove1">Remove</button>    
      </div>

      <div style={styles.paddingTop} className="col-sm">
        <button type="button" style={styles.moveLeft} className="btn btn-primary btn-sm boxShadow">Change</button>
        <button type="button" style={styles.moveRight} className="btn btn-secondary btn-sm boxShadow">Remove</button>
      </div>

      <div style={styles.paddingTop} className="col-sm">
        <button type="button" style={styles.moveLeft} className="btn btn-primary btn-sm boxShadow">Change</button>
        <button type="button" style={styles.moveRight} className="btn btn-secondary btn-sm boxShadow">Remove</button>
      </div>

      <div style={{paddingTop: 15}} className="col-sm">
        <button type="button" style={styles.moveLeft} className="btn btn-primary btn-sm boxShadow">Change</button>
        <button type="button" style={styles.moveRight} className="btn btn-secondary btn-sm boxShadow">Remove</button>
      </div>


    </div> 


    <div className="row text-center"> {/* FIXED ROW WITH YEAR/MODEL INFO */}
      <div style={{borderRightStyle: "groove"}} className="col-sm">
            <div></div>
      </div>

      <div style={{borderRightStyle: "groove"}} className="col-sm">
            <div style={styles.yearMake} onChange={this.handleChange}>
                <h5>{props.year}</h5>
            </div>
      </div>

      <div style={{borderRightStyle: "groove"}} className="col-sm">
            <div style={styles.yearMake}>
                <h5>2014 Honda Pilot</h5>
            </div>
      </div>

      <div style={{borderRightStyle: "groove"}} className="col-sm">
            <div style={styles.yearMake}>
                <h5>2014 Nissan Pathfinder</h5>
            </div>
      </div>

      <div className="col-sm">
            <div style={styles.yearMake}> 
                <h5>2014 Chevy Traverse</h5>
            </div>          
      </div>


    </div>

  </div> 

);
  

export default Fixedarea;









