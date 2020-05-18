import React, { Component } from 'react';

class List extends Component {

    //DisplayList is my props name  
    render() {
        let dispPart = this.props.DisplayList.map(element=>
                <li>{element}</li>
            );
        return (
            <div>
                <ul>
                    {dispPart}
                </ul>
            </div>
        );
    }
}

export default List;