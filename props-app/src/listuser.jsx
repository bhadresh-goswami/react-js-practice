import React, { Component } from 'react';
import UserDetails from './userdetail';


class ListUser extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            list:[
                {userName:"bhadresh",emailId:"bhadresh@dashtechinc.com",tech:"MERN Stack"},
                {userName:"mahlet",emailId:"mahletworkn@gmail.com",tech:"ReactJs"}
            ],
            details: {userName:"",emailId:"",tech:""},
            showDetails:false
        };
        console.log(this.state.list);
    }

    printData(){        
        return this.state.list.map((u)=>
            <tr>
                <td>{u.userName}</td>
                <td>
                    {u.emailId}
                </td>
                <td>
                    <button onClick={ () => this.setState({details:u,showDetails:true}) }>Show Detail</button>
                </td>
            </tr>
        );
    }

    displayDetails(){
        if(this.state.showDetails==true)
        {
            return <UserDetails user={this.state.details} closeIt = {()=>this.setState({showDetails:false})}/>
        }
        else{
            return "";
        }
    }

    render() {



        return (
            <div>
                <h3>List User</h3>
                <table border="1">
                    <thead>
                        <tr>
                            <th>
                                User Name
                            </th>
                            <th>User Email Id</th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.printData()
                        }
                    </tbody>
                </table>
            
                {this.displayDetails()}
            </div>
        );
    }
}

export default ListUser;