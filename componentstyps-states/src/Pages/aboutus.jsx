import React, { Component } from 'react';

class AboutUs extends Component {

    constructor(props, context) {
        super(props, context);
        
        this.state = {
            name:"",
            tech:"",
            show:false
        };
    }
    
    changeName(event){
        this.setState({
            name:event.target.value
        });
    }
    
    changeTech(event){
        this.setState({
            tech:event.target.value
        });
    }
    onClickShow(){
        this.setState({
            show:true
        });
    }

    display () {
        if(this.state.show){
            return <table>
        <tr>
            <td>Name</td>
<td>{this.state.name}</td>
        </tr>
        <tr>
            <td>Tech</td>
<td>{this.state.tech}</td>
        </tr>
        
        </table>
        };
        return "";
    }


    componentWillUpdate(){
        console.log("componentWillUpdate is executed!");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate is executed!");
        return true;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate is executed!");
    }

    render() {

        return (
            <div>
            <input type="text" value={this.state.name} onChange={(e)=>this.changeName(e)}/>
            <br/>
              <input type="text" value={this.state.tech} onChange={(e)=>this.changeTech(e)}/>
              <br/>  
              <button onClick={()=>this.onClickShow()}>Show the Values</button>
              {this.display()}
            </div>
        );
    }
}

export default AboutUs;