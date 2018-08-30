import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../api/auth';
import AuthContext from '../AuthContext';

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    };

    handleSubmit = async event => {
        event.preventDefault();

        const { name, email, password } = this.state;
        const response = await register(name, email, password);
        this.props.onAuth(response.data.token);
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Create a new account and start sending emails</legend>
                        <div className="form-group">
                            <label>Name</label>
                            <input name="name" className="form-control" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" className="form-control" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                onChange={this.handleChange}
                            />
                        </div>

                        <button className="btn btn-primary">Register</button>
                        <div className="col-md-6 float-right">
                            <p className="float-left">
                                <small>Alaready have an account?</small>
                            </p>
                            <Link className="float-right" to="/">
                                <button type="button" className="btn btn-secondary btn-sm">
                                    Login
                                </button>
                            </Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default () =>
    <AuthContext.Consumer>
        {onAuth => <Register onAuth={onAuth} />}
    </AuthContext.Consumer>;
