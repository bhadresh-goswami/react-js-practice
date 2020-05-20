import React, { Component } from 'react';
import Axios from 'axios';
let url = "https://api.covid19api.com/summary";


class ListCovid extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }
    
    componentDidMount(){
        //load the data
        Axios.get(url).then(res=>{
            console.log(res.data["Countries"]);
            this.setState({
                data:res.data["Countries"]
            });
        });
    }

    ListData(){
        return this.state.data.map(ele=>
            <tr>
                <td>
                    {ele.Country}
                </td>
                <td>
                    {ele.NewConfirmed}
                </td>
                <td>
                    {ele.TotalConfirmed}
                </td>
                <td>
                    {ele.NewDeaths}
                </td>
                <td>
                    {ele.TotalDeaths}
                </td>
            </tr>
            );
    }
    render() {
        return (
            <div>
                <table border="1">
                    <tr>
                        <th>Country Name</th>
                        <th>
                            New Cases
                        </th>
                        <th>
                            Total Cases
                        </th>
                        <th>
                            New Deaths
                        </th>
                        <th>
                            Total Deaths
                        </th>
                    </tr>
                    {this.ListData()}
                </table>
            </div>
        );
    }
}

export default ListCovid;