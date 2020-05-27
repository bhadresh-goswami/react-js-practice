import React, { Component } from 'react';

class StatusBox extends Component {
    render() {
        return (
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{this.props.Title}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{this.props.Value}</div>
                            </div>
                            <div className="col-auto">
                            <i className={this.props.ClassName}></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

        );
    }
}

export default StatusBox;