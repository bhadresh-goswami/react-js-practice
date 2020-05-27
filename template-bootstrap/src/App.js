import React, { Compocontentnent, Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import SideBar from './common/sidebar';
import NavTop from './common/navtop';
import Dashboard from './components/dashboard/dashboard';
import Search from './components/search';
import Report from './components/report';

class App extends Component {
  render() {
    return (

      <Router>
        
      <div id="wrapper">
        <SideBar/>
        
        <div id="content-wrapper" className="d-flex flex-column">

          <div id="content">
            <NavTop/> 
            <div className="container-fluid">
              {/* <Dashboard/> */}
              <Switch>
                <Route exact path="/">
                  <Dashboard/>
                </Route>
                <Route exact path="/search">
                  <Search/>
                </Route>
                <Route exact path="/report">
                  <Report/>
                </Route>
              </Switch>
            </div> 
          </div>

        </div>
      </div>
      
      </Router>

    );
  }
}

export default App;