// Include React as a dependency
import React, { Component } from 'react'
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
import { Link } from "react-router";

const styles = {
  font: {
    color: "blue"
  },

  image: {
    width: 200
  },

  column: {
    padding: 0
  },

  stickydiv: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "#ecf0f1"
  }

};




// Create the Main component
class Main extends Component {

  render() {

    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
      <div className="main-container">
        <div className="container">
          {/* Navbar */}
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">Ryte-Auto  Comparisons</Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  {/* Using <Link> in place of <a> and "to" in place of "href" */}
                  <li><Link to="/search">Cars for Sale</Link></li>
                  <li><Link to="/saved">Research</Link></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="container">

            <div style={styles.stickydiv} className="container">

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

            <div className="row">
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

          </div> {/* END OF FIXED AREA CONTAINER */}



            <div className="row"> {/* ROW CONTAINING THUMBNAILS IMAGES OF VEHICLE */}

                <div style={styles.column} className="col-sm-2 col-md-2">
                  <div className="thumbnail">                    
                    <div className  ="caption">
                      <a href="#" className="btn btn-primary btn-xs" role="button">New Comparison</a>                      
                   </div>
                  </div>
                </div>     

                <div style={styles.column} className="col-sm-2 col-md-2">
                  <div className="thumbnail">
                    <img src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014FRD007a_320/2014FRD007a_320_01.png" alt="Ford Explorer" />
                    

                    <div className="dropdown btn-xs">
                      <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Dropdown
                        <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="#">Trim 1<i className="fa fa-info-circle" aria-hidden="true"></i></a></li>
                        <li><a href="#">Trim 2</a></li>
                        <li><a href="#">Trim 3</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>


                  </div>
                </div>         

              
                <div style={styles.column} className="col-sm-2 col-md-2">
                  <div className="thumbnail">
                    <img src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014HON011b_320/2014HON011b_320_01.png" />
                    
                    <div className="dropdown btn-xs">
                      <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Dropdown
                        <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="#">Trim 1<i className="fa fa-info-circle" aria-hidden="true"></i></a></li>
                        <li><a href="#">Trim 2</a></li>
                        <li><a href="#">Trim 3</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>


                  </div>
                </div>
             
              
                <div style={styles.column} className="col-sm-2 col-md-2">
                  <div className="thumbnail">
                    <img src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014NIS008a_320/2014NIS008a_320_01.png" alt="GMC Acadia" />  

                    <div className="dropdown btn-xs">
                      <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Dropdown
                        <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="#">Trim 1<i className="fa fa-info-circle" aria-hidden="true"></i></a></li>
                        <li><a href="#">Trim 2</a></li>
                        <li><a href="#">Trim 3</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>    

                  </div>                  
                </div>             

            
                <div style={styles.column} className="col-sm-2 col-md-2">
                  <div className="thumbnail">
                    <img src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014CHE019a_320/2014CHE019a_320_01.png" alt="Chevy Traverse" />  

                    <div className="dropdown btn-xs">
                      <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Dropdown
                        <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="#">Trim 1<i className="fa fa-info-circle" aria-hidden="true"></i></a></li>
                        <li><a href="#">Trim 2</a></li>
                        <li><a href="#">Trim 3</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>    
                  </div>
                  
                </div>
             
            </div> {/* END OF THUMBNAIL ROW */}                      

         

            <div className="container">  {/* CONTAINER PANEL INFO AREA DISPLAYING VEHICLE SPECS */}                 
                    <div className="row">

                      <div style={styles.column} className="col-sm-2 col-md-2">
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h3 className="panel-title">MSRP</h3>
                          </div>
                          <div className="panel-body">

                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                            
                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                            
                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                           
                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                            
                          </div>
                        </div>   
                      </div> {/* END OF COLUMN */}


                      <div style={styles.column} className="col-sm-2 col-md-2">
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h3 className="panel-title">$32,500</h3>
                          </div>
                          <div className="panel-body">

                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                            
                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                            
                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                           
                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                            
                          </div>
                        </div>   
                      </div> {/* END OF COLUMN */}

                      <div style={styles.column} className="col-sm-2 col-md-2">
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h3 className="panel-title">$33,800</h3>
                          </div>
                          <div className="panel-body">

                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                            
                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                            
                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                           
                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                            
                          </div>
                        </div>   
                      </div> {/* END OF COLUMN */}


                      <div style={styles.column} className="col-sm-2 col-md-2">
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h3 className="panel-title">$34,900</h3>
                          </div>
                          <div className="panel-body">

                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                            
                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                            
                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                           
                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                            
                          </div>
                        </div>   
                      </div> {/* END OF COLUMN */}


                      <div style={styles.column} className="col-sm-2 col-md-2">
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h3 className="panel-title">$35,100</h3>
                          </div>
                          <div className="panel-body">

                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                            
                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                            
                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                           
                          </div>
                          <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                          </div>
                          <div className="panel-body">
                            
                          </div>
                        </div>   
                      </div> {/* END OF COLUMN */}


                    </div> {/* END OF PANEL INFO ROW*/}
                  </div> {/* END OF PANEL INFO CONTAINER*/}



          </div>

          


          {/* Here we will deploy the sub components (Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {this.props.children}

          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-github" aria-hidden="true"></i>
              Proudly built using React.js
            </p>
          </footer>
        </div>
      </div>
    );
  }
};

// Export the module back to the route
export default Main;