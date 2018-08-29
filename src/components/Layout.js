import React, { Component } from 'react';
import Logout from './Logout';

export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="navbar-brand" href="#">
                        Unitrends - Kirill Simin
                    </div>
                    <div className="collapse navbar-collapse">
                        <Logout jwt={this.props.jwt} />
                    </div>
                </nav>
                <br />
                {this.props.children}
            </div>
        );
    }
}
