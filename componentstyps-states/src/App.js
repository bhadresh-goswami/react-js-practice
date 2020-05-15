import React, { Component } from 'react';
import Navigation from './Common/navigation';
import Footer from './Common/footer';
import Sidebar from './Common/sidebar';
import "./App.css";
import Home from './Pages/home';
import AboutUs from './Pages/aboutus';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <div className="main_content">
          <Home/>
          <AboutUs/>
        </div>
        <Sidebar/>
        <p className="clear"></p>
        <Footer/>
      </div>
    );
  }
}

export default App;