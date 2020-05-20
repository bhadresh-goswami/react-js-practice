import React, { Compocontentnent, Component } from 'react';
import SideBar from './common/sidebar';
import NavTop from './common/navtop';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <SideBar/>
        
        <div id="content-wrapper" className="d-flex flex-column">

          <div id="content">
            <NavTop/>  
          </div>

        </div>
      </div>
    );
  }
}

export default App;