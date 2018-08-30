import React, { Component } from 'react';
import Navigation from './Navigation';

export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="navbar-brand" href="#">
                        <i className="fa fa-fw fa-envelope-open"/>
                        Unitrends - Kirill Simin
                    </div>
                    <Navigation jwt={this.props.jwt} />
                </nav>
                <br />
                {this.props.children}
            </div>
        );
    }
}
