import React from "react";


const styles = {
  
  fixedarea: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "#ecf0f1",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: 5
  },

  paddingTop: {
    paddingTop: 15
  },

  moveRight: {
    position: "relative",
    left: 6,
    paddingRight: 20,
    paddingLeft: 20,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: 5
  }, 

  moveLeft: {
    position: "relative",
    right: 6,
    paddingRight: 20,
    paddingLeft: 20,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: 5
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
        <button type="button" style={styles.moveLeft} className="btn btn-primary btn-sm" >Change</button>
        <button type="button" style={styles.moveRight} className="btn btn-secondary btn-sm">Remove</button>    
      </div>

      <div style={styles.paddingTop} className="col-sm">
        <button type="button" style={styles.moveLeft} className="btn btn-primary btn-sm">Change</button>
        <button type="button" style={styles.moveRight} className="btn btn-secondary btn-sm">Remove</button>
      </div>

      <div style={styles.paddingTop} className="col-sm">
        <button type="button" style={styles.moveLeft} className="btn btn-primary btn-sm">Change</button>
        <button type="button" style={styles.moveRight} className="btn btn-secondary btn-sm">Remove</button>
      </div>

      <div style={styles.paddingTop} className="col-sm">
        <button type="button" style={styles.moveLeft} className="btn btn-primary btn-sm">Change</button>
        <button type="button" style={styles.moveRight} className="btn btn-secondary btn-sm">Remove</button>
      </div>

    </div> 

    <div className="row text-center"> {/* FIXED ROW WITH YEAR/MODEL INFO */}
      <div className="col-sm">
            <div>
              
            </div>
      </div>

      <div className="col-sm">
            <div style={styles.yearMake}>
                <h5>2014 Ford Explorer</h5>
            </div>
      </div>

      <div className="col-sm">
            <div style={styles.yearMake}>
                <h5>2014 Honda Pilot</h5>
            </div>
      </div>

      <div className="col-sm">
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




