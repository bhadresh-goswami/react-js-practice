import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false
    };
  }

  setShow(val){
    this.setState({show:val});
  }
  
  render() {


    let divShow = <h2>this is the details</h2>;
    let divReg = <form action="/action_page.php">
      <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr/>
    
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required />
    
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
    
        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
        <hr/>
        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    
        <button type="button" onClick={()=>{this.setState({show:true})}} className="registerbtn">Register</button>
      </div>
      
      <div className="container signin">
        <p>Already have an account? <a href="#">Sign in</a>.</p>
      </div>
    </form>;

    let divPresent = <h1></h1>;

    /*uncomment to use the logic */
    // if(!this.state.show)
    // {
    //   divPresent = divReg;
    // }
    // else{
    //   divPresent = divShow;
    // }
    return (
      <div>
        {divPresent}
      </div>
    );
  }
}

export default App;