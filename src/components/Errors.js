import React, { Component } from 'react';

export default class Errors extends Component {
    state = {
        previous: {},
        errors: [],
        message: null
    };

    componentDidUpdate() {
        if (this.props.errors && this.props.errors !== this.state.previous) {
            this.setState({ previous: this.props.errors });
            let errors = [];
            for (var key in this.props.errors) {
                if (this.props.errors.hasOwnProperty(key)) {
                    errors.push(this.props.errors[key][0]);
                }
            }
            this.setState({ errors });
        }
    }

    renderErrors() {
        return this.state.errors.map(function(error, index) {
            return (
                <li key={index}>
                    {error}
                </li>
            );
        });
    }

    render() {
        if (this.state.errors.length === 0) {
            return null;
        }
        return (
            <div className="alert alert-warning">
                <strong>Oh snap!</strong>
                <ul>
                    {this.renderErrors()}
                </ul>
            </div>
        );
    }
}
