import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            UserName:"bhadresh",
            EmailId:"",
            Tech:""
        };
    }
    SaveData = () => {
        //alert("a");
        console.log(this.state);

    }

    ChangeUserName = (e)=>{
        this.setState({
            UserName:e.target.value
        });
        //console.log(this.state)
    }
    ChangeEmailId = (e)=>{
        
        this.setState({
            EmailId:e.target.value
        });
        //console.log(this.state)
    }
    ChangeTech = (e)=>{
        
        this.setState({
            Tech:e.target.value
        });
        //console.log(this.state)
    }
    render() {
        return (
            <div>
             
                <form>
                    <table>
                        <tr>
                            <td>
                                Enter User Name
                            </td>
                            <td>
                                <input type="text" value={this.state.UserName} onChange={(e) => this.ChangeUserName(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Enter User Email Id
                            </td>
                            <td>
                                <input type="text"  onChange={(e) => this.ChangeEmailId(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Select Technology
                            </td>
                            <td>
                                <select  onChange={(e) => this.ChangeTech(e)} >
                                    <option>Select Tech</option>
                                    <option>React Js</option>
                                    <option>MERN Stack</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="button" onClick={()=>this.SaveData()}>Save Data!</button>
                            </td>
                        </tr>
                    </table>
                </form>
                
            </div>
        );
    }
}

export default AddUser;
