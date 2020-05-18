import React, { Component } from 'react';
import List from './list';

class Data extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Technologies:["ReactJs","JSX","NodeJs","MEAN","MERN"],
            Candidates:["Dhaval","Jagruti","Bhadresh","Nirav"]
        };
    }
    

    render() {
        return (
            <div>
                <table border="1" width="50%">
                    <tr>
                        <td>Technologies</td>
                        <td>
                            Candidates
                        </td>
                    </tr>
                    <tr>
                        <td><List DisplayList={this.state.Technologies}/></td>
                        <td><List DisplayList={this.state.Candidates}/></td>
                    </tr>
                </table>
            </div>
        );
    }
}



export default Data;