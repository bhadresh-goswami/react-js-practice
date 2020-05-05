// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   var mycss = {
//     color:'#ff0000',
//     background:'yellow',
//     fontFamily:'arial'
//   };
//   return (
//     <div className="App">
      
//       <h1 style={{background:'#ff00ff',color:'white'}}>
//         Hello World!
//       </h1>

//       <h2 style={mycss}>Heading 2</h2>
      
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './mycss.css';
import css1 from './css1.module.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Container, Col,Row} from 'react-bootstrap';

import SideBar from './sidebar';
import Login from './login';

class App extends Component {
  render() {
    const mycss = {
      color:'red',
      background:'yellow',
      fontFamily:'calibri'
    };
    return (
      <div>
      <div className={css1.mytext}>
        <h1 style={mycss}>Heading 1</h1>  
        <h3>
          Heading 3 from separate css file
        </h3>
        
      </div>
      
      <Container>
          <Row>
            <Col>this is col-1</Col>
            <Col>this is col-2</Col>
            <Col>this is col-3</Col>
          </Row>
          <Row>            
            <Col>this is col-4</Col>
          </Row>
          <Row>
            <Col sm={8}>
              <Login/>
            </Col>
            <Col sm={4}><SideBar/></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;