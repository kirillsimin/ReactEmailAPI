import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../api/auth';
import Errors from './Errors';
import AuthContext from '../AuthContext';

class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: []
    };

    componentWillMount() {
        localStorage.clear();
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        const response = await login(email, password);

        if (response.data.error) {
            this.setState({ errors: { error: [response.data.error] } });
        } else {
            this.setState({ errors: [] });
            this.props.onAuth(response.data.token);
        }
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div>
                <div className="col-md-6 offset-md-3">
                    <Errors errors={this.state.errors} />
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Please log in to start sending emails</legend>
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

                            <button className="btn btn-primary">Login</button>
                            <div className="col-md-6 float-right">
                                <p className="float-left">
                                    <small>Don't have an account yet?</small>
                                </p>
                                <Link className="float-right" to="/register">
                                    <button type="button" className="btn btn-secondary btn-sm">
                                        Register
                                    </button>
                                </Link>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

export default () =>
    <AuthContext.Consumer>
        {onAuth => <Login onAuth={onAuth} />}
    </AuthContext.Consumer>;
