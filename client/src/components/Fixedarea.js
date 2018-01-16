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

  <div style={styles.fixedarea} className="container-fluid"> {/* FIXED AREA CONTAINER */}

    <div className="row"> {/* ROW ABOVE THUMBNAIL PICTURES CONTAINING CHANGE/REMOVE BUTTONS */}

      <div className="col-sm">
        <p>Comparing 1-4 of 4</p>
      </div>

      <div className="col-sm">
        <button type="button" className="btn btn-primary btn-sm">Change</button>
        <button type="button" className="btn btn-secondary btn-sm">Remove</button>    
      </div>

      <div className="col-sm">
        <button type="button" className="btn btn-primary btn-sm">Change</button>
        <button type="button" className="btn btn-secondary btn-sm">Remove</button>
      </div>

      <div className="col-sm">
        <button type="button" className="btn btn-primary btn-sm">Change</button>
        <button type="button" className="btn btn-secondary btn-sm">Remove</button>
      </div>

      <div className="col-sm">
        <button type="button" className="btn btn-primary btn-sm">Change</button>
        <button type="button" className="btn btn-secondary btn-sm">Remove</button>
      </div>

    </div> 

    <div className="row"> {/* FIXED ROW WITH YEAR/MODEL INFO */}
      <div className="col-sm">
            <div>
              
            </div>
      </div>

      <div className="col-sm">
            <div>
                <p>2014 Ford Explorer</p>
            </div>
      </div>

      <div className="col-sm">
            <div>
                <p>2014 Honda Pilot</p>
            </div>
      </div>

      <div className="col-sm">
            <div>
                <p>2014 Nissan Pathfinder</p>
            </div>
      </div>

      <div className="col-sm">
            <div>
                <p>2014 Chevy Traverse</p>
            </div>
      </div>

    </div>

  </div> 

);
  

export default Fixedarea;




