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

            <div className="row">

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
                  <div className="thumbnail">                    
                    <div className  ="caption">
                      <a href="#" className="btn btn-primary btn-xs" role="button">New Comparison</a>
                      
                   </div>
                  </div>
                </div>     

                <div style={styles.column} className="col-sm-2 col-md-2">
                  <div className="thumbnail">
                    <img src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014FRD007a_320/2014FRD007a_320_01.png" alt="Ford Explorer" />
                    <div className  ="caption">
                      <h3 style={styles.font}>2014 GMC Acadia</h3>
                      <p>...</p>
                      <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                   </div>
                  </div>
                </div>         

              
                <div style={styles.column} className="col-sm-2 col-md-2">
                  <div className="thumbnail">
                    <img src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014HON011b_320/2014HON011b_320_01.png" />
                    <div className  ="caption">
                      <h3>2014 Honda Pilot</h3>
                      <p>...</p>
                      <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                   </div>
                  </div>
                </div>
             
              
                <div style={styles.column} className="col-sm-2 col-md-2">
                  <div className="thumbnail">
                    <img src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014NIS008a_320/2014NIS008a_320_01.png" alt="GMC Acadia" />
                    <div className  ="caption">
                      <h3>2014 Nissan Pathfinder</h3>
                      <p>...</p>
                      <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                   </div>
                  </div>
                </div>             

            
                <div style={styles.column} className="col-sm-2 col-md-2">
                  <div className="thumbnail">
                    <img src="http://images.nadaguides.com/ChromeImageGallery/Expanded/Transparent/320/2014CHE019a_320/2014CHE019a_320_01.png" alt="Chevy Traverse" />
                    <div className  ="caption">
                      <h3>2014 Chevy Traverse</h3>
                      <p>...</p>
                      <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                   </div>
                  </div>
                </div>
             
            </div>  

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