import React, { Component } from 'react';
import DetailsData from './detailsData';

class ListData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users:[
                {name:'bhadresh',emailid:'bhadresh@dashtechinc.com',age:30,tech:'MEAN Stack'},
                
                {name:'bhavesh',emailid:'bhavesn@dashtechinc.com',age:24,tech:'React Js'},
                
                {name:'mahlet',emailid:'mahlet@gmail.com',age:30,tech:'MERN Stack'}
            ],
            userData:{name:'',emailid:'',age:0,tech:''},
            name:'',emailid:'',age:0,tech:''
        };

        this.showDetails = this.showDetails.bind(this);
        this.addNew = this.addNew.bind(this);
        this.DeleteIt = this.DeleteIt.bind(this);
    }
    
    printData(){
        return this.state.users.map((user)=>
            <tr>
                <td>
                    {user.name}
                </td>
                <td>
                    {user.emailid}
                </td>
                <td>
                    {user.age}
                </td>
                <td>
                    {user.tech}
                </td>
                <td>
                    <button onClick={()=>{this.setState({userData:user})}}>Show!</button>
                    <button onClick={(evt)=>this.showDetails(user,evt)}>Show Details!</button>
                    
                    <button onClick={()=>this.DeleteIt(user)}>Delete It!</button>
                </td>
            </tr>
        );
    }
    DeleteIt(user)
    {
        var users = this.state.users;
        for (let index = 0; index < users.length; index++) {
            const element = users[index];
            if(element.emailid === user.emailid)
            {
                users.splice(index,1);
                break;
            }

        }
        this.setState({users:users});
        console.log(users);
    }
    showDetails(user,evt){
        this.setState({userData:user});
        alert(evt.type);
    }

    changeName(evt){
        this.setState({name:evt.target.value});
    }
    changeEmailId(evt){
        
        this.setState({emailid:evt.target.value});
    }
    changeTech(evt){
        
        this.setState({tech:evt.target.value});
    }
    changeAge(evt){
        
        this.setState({age:evt.target.value});
    }

    addNew(){
        var usersD = this.state.users;
        //alert(this.state.users.length);

        var u = {name:this.state.name, emailid:this.state.emailid, age:this.state.age,tech:this.state.tech};
        usersD.push(u);
        //console.log(users);

        this.setState({users:usersD});
    }

    render() {
        return (
            <div>

                <table>
                    <thead>
                        <tr>
                            <th>
                                Enter Name
                            </th>
                            <td>
                                <input type="text" onChange={(evt)=>this.changeName(evt)}/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Enter Age
                            </th>
                            <td>
                                <input type="number" min="20" max="80" onChange={(evt)=>this.changeAge(evt)}/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Enter Email Id
                            </th>
                            <td>
                                <input type="text" onChange={(evt)=>this.changeEmailId(evt)}/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Enter Technology
                            </th>
                            <td>
                                <select  onChange={(evt)=>this.changeTech(evt)}>
                                    <option>Select</option>
                                    <option>MEAN Stack</option>
                                    <option>MERN Stack</option>                                    
                                    <option>ReactJs</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="button" onClick={()=>this.addNew()}> Add New </button>
                            </td>
                        </tr>
                    </thead>
                </table>

                <hr/>
              <table border="1">
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>EmailId</th>
                      <th>Age</th>
                      <th>Technology</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.printData()}
                    </tbody>
                </table>  
                <hr/>
                <DetailsData data={this.state.userData}/>
            </div>
        );
    }
}

export default ListData;