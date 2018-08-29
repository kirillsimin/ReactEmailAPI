import React, { Component } from 'react';
import { login } from '../api/auth';
import AuthContext from '../AuthContext';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    componentWillMount() {
        localStorage.clear();
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        const response = await login(email, password);
        this.props.onAuth(response.data.token);
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" className="form-control" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" onChange={this.handleChange} />
                    </div>

                    <button className="btn btn-success">Login</button>
                </form>
            </div>
        );
    }
}

export default () =>
    <AuthContext.Consumer>
        {onAuth => <Login onAuth={onAuth} />}
    </AuthContext.Consumer>;
