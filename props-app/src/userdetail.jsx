import React, { Component } from 'react';

class UserDetails extends Component {

    constructor(props)
    {
        super(props);
        //in way 1 we need to bind event
        this.closeIt = this.closeIt.bind(this);
    }

    //way 1
    closeIt(data){
        alert(data);
        this.props.closeIt();
    }

    //event way 2: no need to bind
    closeItEvent = (data,event) => {
        alert(data + "Event type:"+event.type);
        this.props.closeIt();
    }
    render() {
        return (
            <div>
                <h3>Details Show</h3>
                <ul>
                    <li>
                        <b>User Name: </b>{this.props.user.userName}
                    </li>
                    <li>
                        <b>User Email Id:</b>{this.props.user.emailId}
                    </li>
                    <li>
                        <b>User Technology:</b>{this.props.user.tech}
                    </li>
                    
                </ul>
                <button onClick={(event)=>this.closeItEvent("some details!",event)}>Close X</button>

            </div>
        );
    }
}

export default UserDetails;