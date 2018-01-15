import React from "react";


const styles = {
  
  fixedarea: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "#ecf0f1"
  },

  column: {
    padding: 0
  }

};


const Fixedarea = () => (

  <div style={styles.fixedarea} className="container"> {/* FIXED AREA CONTAINER */}

    <div className="row"> {/* ROW ABOVE THUMBNAIL PICTURES CONTAINING CHANGE/REMOVE BUTTONS */}

      <div className="col-sm-2 col-md-2">
        <p>Comparing 1-4 of 4</p>
      </div>

      <div className="col-sm-2 col-md-2">
        <a href="#" className="btn btn-primary btn-xs" role="button">Change</a> <a href="#" className="btn btn-default btn-xs" role="button">Remove</a>            
      </div>

      <div className="col-sm-2 col-md-2">
        <a href="#" className="btn btn-primary btn-xs" role="button">Change</a> <a href="#" className="btn btn-default btn-xs" role="button">Remove</a>
      </div>

      <div className="col-sm-2 col-md-2">
        <a href="#" className="btn btn-primary btn-xs" role="button">Change</a> <a href="#" className="btn btn-default btn-xs" role="button">Remove</a>
      </div>

      <div className="col-sm-2 col-md-2">
        <a href="#" className="btn btn-primary btn-xs" role="button">Change</a> <a href="#" className="btn btn-default btn-xs" role="button">Remove</a>
      </div>

    </div> 

    <div className="row"> {/* FIXED ROW WITH YEAR/MODEL INFO */}
      <div style={styles.column} className="col-sm-2 col-md-2">
            <div>
              
            </div>
      </div>

      <div style={styles.column} className="col-sm-2 col-md-2">
            <div>
                <p>2014 Ford Explorer</p>
            </div>
      </div>

      <div style={styles.column} className="col-sm-2 col-md-2">
            <div>
                <p>2014 Honda Pilot</p>
            </div>
      </div>

      <div style={styles.column} className="col-sm-2 col-md-2">
            <div>
                <p>2014 Nissan Pathfinder</p>
            </div>
      </div>

      <div style={styles.column} className="col-sm-2 col-md-2">
            <div>
                <p>2014 Chevy Traverse</p>
            </div>
      </div>

    </div>

  </div> 

);
  

export default Fixedarea;




