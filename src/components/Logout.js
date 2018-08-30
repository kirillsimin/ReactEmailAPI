import React, { Component } from 'react';
import { logout } from '../api/auth';

export default class Logout extends Component {
    state = {
        status: ''
    };

    handleSubmit = async event => {
        event.preventDefault();

        const response = await logout();
        if (response.status === 200) {
            localStorage.clear();
            this.setState({ status: response.status });
            window.location.reload();
        }
    };

    render() {
        return (
            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                    Logout
                </button>
            </form>
        );
    }
}
