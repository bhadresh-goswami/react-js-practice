import React, { Component } from 'react';

import "../App.css";

class Navigation extends Component {

    constructor(props) {
        super(props);
    
    }

    componentWillMount(){
        console.log("Component will Mount is Executed!");
    }
    componentDidMount(){
        console.log("Component did Mount is Executed!");
    }
    render() {
        return (
            <div className="nav">
                This is navigation part
            </div>
        );
    }
}

export default Navigation;