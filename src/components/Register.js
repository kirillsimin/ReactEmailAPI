import React, { Component } from 'react';
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
            <div className="App">
                <form onSubmit={this.handleSubmit}>
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
                        <input type="password" name="password" className="form-control" onChange={this.handleChange} />
                    </div>

                    <button className="btn btn-success">Register</button>
                </form>
            </div>
        );
    }
}

export default () =>
    <AuthContext.Consumer>
        {onAuth => <Register onAuth={onAuth} />}
    </AuthContext.Consumer>;

