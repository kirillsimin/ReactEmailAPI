import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

export default class Navigation extends Component {
    render() {
        if (!this.props.jwt) {
            return null;
        }

        return (
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/send-email">
                            Send an email
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/view-emails">
                            View my emails
                        </Link>
                    </li>
                </ul>
                <Logout jwt={this.props.jwt} />
            </div>
        );
    }
}
