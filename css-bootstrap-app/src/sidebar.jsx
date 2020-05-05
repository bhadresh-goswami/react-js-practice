import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        return (
            <div>
                <ul>
                   <li><a href="#">Home</a></li> 
                   <li><a href="#">About</a></li> 
                   <li><a href="#">Contact</a></li> 
                   <li><a href="#">List</a></li> 
                   <li><a href="#">Link1</a></li> 
                   <li><a href="#">Link2</a></li> 
                </ul>
            </div>
        );
    }
}

export default SideBar;