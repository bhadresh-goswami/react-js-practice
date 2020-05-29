import React, { Component } from 'react';
import {
    TableContainer,
    Table,
    TableRow,
    TableCell,
    TableBody,
    TableHead,
    Paper,
    makeStyles,
    Button,
    Collapse
} from '@material-ui/core';
import {Alert} from '@material-ui/lab';

let urlSummary = "https://api.covid19api.com/summary1";




class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:"",showHide:false,
            Global:{},
            CountriesData:[]//186 items
        };
    }
    componentDidMount(){
        fetch(urlSummary)
        .then(res=>{
            console.log(res);
            if(res.status.toString()=="404"){
                this.setState({msg:"Url Not Found!"});
            }
            if(res.status.toString()=="429"){
                this.setState({msg:"Server Side Error, Try again later!"});
            }
            else if(res==undefined)
            {
                this.setState({msg:"not found any data1"});

            }    
            else{
                return res.json();
            }
            
        })
        .then(data=>{
            console.log(data);
            if(data==404)
            {
                this.setState({msg:"not found any data Url not found!"});
            }
            else if(data==undefined){
                if(this.state.msg==""){
                    this.setState({msg:"not found any data2"});
                }
                
            }
            else
            {
                this.setState({
                    Global:data.Global,
                    CountriesData:data.Countries
                })
                console.log(this.state.Global);
                console.log(this.state.CountriesData);
            }
        }).catch(err=>{
            this.setState({msg:"an error"});
            console.log(this.state.msg);

        })
    }

    renderBody(){
        if(this.state.CountriesData==undefined){
            return;
        }
        return this.state.CountriesData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.Country}
              </TableCell>
              <TableCell align="right">{row.NewConfirmed}</TableCell>
              <TableCell align="right">{row.TotalConfirmed}</TableCell>
              <TableCell align="right">{row.NewDeaths}</TableCell>
              <TableCell align="right">{row.TotalDeaths}</TableCell>
            </TableRow>
          ))
    }
    setOpen(val){
        this.setState({showHide:val});
    }
    showError(){
        if(this.state.msg!="")
        {
           return <div>
               
                <Alert  variant="filled" severity="error" onClose={() => {this.setState({msg:""})}}>{this.state.msg}</Alert>
               
            {/* <Alert
            action={
                <Button color="inherit" size="small">
                UNDO
                </Button>
            }
            >
                {this.state.msg}
            </Alert> */}
           </div>
        }
    }


    render() {

        return (

            
            <div>
            <div className="row">
            <div className="col-xl-12 col-lg-11">
          <div className="card shadow mb-4">
            
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Search Result</h6>
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
            <h1> {this.showError()} </h1>
            <TableContainer component="Paper" >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country Name</TableCell>
            <TableCell align="right">New Confirmed</TableCell>
            <TableCell align="right">Total Confirmed</TableCell>
            <TableCell align="right">New Deaths</TableCell>
            <TableCell align="right">Total Deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {this.renderBody()}
        </TableBody>
      </Table>
    </TableContainer>
 
            </div>
          </div>
        </div>
            </div>
        </div>
        );
    }
}

export default Report;