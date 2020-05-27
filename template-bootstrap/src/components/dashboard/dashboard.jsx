import React, { Component } from 'react';
import StatusBox from './statusbox';
import EarningOverview from './earningoverview';
import CovidSummary from './summary';
let urlSummary = "https://api.covid19api.com/summary";
//https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest
//https://rapidapi.com/Gramzivi/api/covid-19-data?endpoint=apiendpoint_b1d9fa14-0a5a-459a-b67d-81b23c45816d
class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Global:{},
            CountriesData:[]//186 items
        };
    }

    componentDidMount(){
        fetch(urlSummary)
        .then(res=>res.json())
        .then(data=>{
            //console.log(data.Global);
            this.setState({
                Global:data.Global,
                CountriesData:data.Countries
            })
            console.log(this.state.Global);
            console.log(this.state.CountriesData);
        })
    }

    render() {
        return (
            <div>
                
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>                
                <div className="row"> 
                    <StatusBox Title="Total Cases" Value={this.state.Global.TotalConfirmed} ClassName="fas fa-calendar fa-2x text-gray-300"/>
                    <StatusBox Title="Total Death" Value={this.state.Global.TotalDeaths} ClassName="fas fa-dollar-sign fa-2x text-gray-300"/>
                    <StatusBox Title="Total Recover" Value={this.state.Global.TotalConfirmed} ClassName="fas fa-calendar fa-2x text-gray-300"/>
                    
                        <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                        <div className="row no-gutters align-items-center">
                            <div className="col-auto">
                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">30%</div>
                            </div>
                            <div className="col">
                            <div className="progress progress-sm mr-2">
                                <div className="progress-bar bg-info" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-auto">
                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                    </div>
                    </div>
                </div>
                </div>


                </div>
                {/* <EarningOverview/> */}
                <CovidSummary 
                NewConfirmed={this.state.Global.NewConfirmed}
                TotalConfirmed={this.state.Global.TotalConfirmed}
                NewDeaths={this.state.Global.NewDeaths}
                TotalDeaths={this.state.Global.TotalDeaths}
                NewRecovered={this.state.Global.NewRecovered}
                TotalRecovered={this.state.Global.TotalRecovered}
                />
            </div>
        );
    }
}

export default Dashboard;