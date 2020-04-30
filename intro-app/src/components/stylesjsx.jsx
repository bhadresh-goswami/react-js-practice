import React, { Component } from 'react';

class StylesJsx extends Component {
    render() {
        
        var mystyle = {
            color:'#ff0000',
            backgroundColor: "lightblue"
        }
        return (
            <div>
                <h2 style={mystyle}>Red Colore Text</h2>
            </div>
        );
    }
}

export default  StylesJsx;