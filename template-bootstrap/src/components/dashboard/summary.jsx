import React, { Component } from 'react';

class CovidSummary extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentWillReceiveProps()
  {
    console.log(this.props.CovidData); 
  }
    render() {
        return (
            <div>
                <div className="row">
                <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Covid-19 Summary of Today</h6>
                  <div className="dropdown no-arrow">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                      <div className="dropdown-header">Dropdown Header:</div>
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
                
                <div className="card-body">
                    <h4>New Cases: {this.props.NewConfirmed}</h4>
                    <h4>Total Cases: {this.props.TotalConfirmed}</h4>
                    <h4>New Deaths: {this.props.NewDeaths}</h4>
                    <h4>Total Deaths: {this.props.TotalDeaths}</h4>
                    <h4>New Recovered: {this.props.NewRecovered}</h4>
                    <h4>Total Recovered: {this.props.TotalRecovered}</h4>
                    <p></p>
                </div>
              </div>
            </div>
                </div>
            </div>
        );
    }
}

export default CovidSummary;