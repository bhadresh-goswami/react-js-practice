import React, { Component } from 'react';

class DetailsData extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <b>User Name: </b> {this.props.data.name}
                    </li>    
                    <li>
                        <b>User Email Id: </b> {this.props.data.emailid}
                    </li>    
                    <li>
                        <b>User Technology: </b> {this.props.data.tech}
                    </li>    
                    <li>
                        <b>User Age: </b> {this.props.data.age}
                    </li>    
                </ul>
            </div>
        );
    }
}

export default DetailsData;