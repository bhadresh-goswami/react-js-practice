import React, { Component } from 'react';
import './App.css';
let url = "https://api.covid19api.com/summary";
//inheritance oops
class App extends Component {

  constructor(props) {
    super(props);
    /*
    "Country": "Afghanistan",
"CountryCode": "AF",
"Slug": "afghanistan",
"NewConfirmed": 276,
"TotalConfirmed": 4963,
"NewDeaths": 5,
"TotalDeaths": 127,
"NewRecovered": 52,
"TotalRecovered": 610,
"Date": "2020-05-13T16:31:49Z"
    */
    this.state= {
      covid:{
          "Global":
          {
            "NewConfirmed": 0,
            "TotalConfirmed":0,
            "NewDeaths": 0,
            "TotalDeaths": 0,
            "NewRecovered": 0,
            "TotalRecovered": 0
          },
          "Countries":[]
        },
      countrylist:[

      ]
    };


  }
  
 componentDidMount(){
   fetch(url).then(res=>{
     return res.json()
     
   }).then(data=>{
    this.setState({covid:data});
    this.setState({countrylist:this.state.covid.Countries});
    //console.log(this.state.countrylist);
    console.log(this.state.covid);
   });
 }

 showData()
 {
   return this.state.countrylist.map((items)=>
    <tr>
        <td>
          {items["Country"]}
        </td>
        <td>{items["TotalConfirmed"]}</td>
        <td>{items["TotalDeaths"]}</td>
        <td>{items["NewRecovered"]}</td>
        
      </tr>
   );
 }

  render() {
    return (
      <div>
        <h4>Total:{this.state.covid["Global"]["TotalConfirmed"]}</h4>
        <table border="1">
          <tbody>
            <tr>
              <th>
                Country Name
              </th>
              <th>
                Total Confirmed
              </th>
              <th>
                Total Deaths
              </th>
              <th>
                Total Recovered
              </th>
              
            </tr>
            {this.showData()}
          </tbody>
        </table>
      </div>
    );
  }
} 

export default App;