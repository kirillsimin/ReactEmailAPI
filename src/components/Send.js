import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { send } from '../api/email';
import Errors from './Errors';

class Send extends Component {
    state = {
        subject: '',
        text: '',
        status: null,
        errors: [],
        message: null
    };

    handleSubmit = async event => {
        event.preventDefault();

        const { subject, text } = this.state;
        const response = await send(subject, text);
        if (response.status) {
            this.setState({ status: response.status });
        }

        if (response.data.errors) {
            this.setState({ errors: response.data.errors });
        } else {
            this.setState({ errors: [] });
        }

        if (response.data.message) {
            this.setState({ message: 'Something went wrong.' });
        } else {
            this.setState({ message: null });
        }
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        if (this.state.status === 201) {
            return <Redirect to="/view-emails" />;
        }

        return (
            <div className="col-md-6 offset-md-3">
                <p>
                    {this.state.message}
                </p>
                <Errors errors={this.state.errors} />
                <form onSubmit={this.handleSubmit}>
                    <legend>Send an email to yourself</legend>
                    <div className="form-group">
                        <label>Subject</label>
                        <input name="subject" className="form-control" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Text</label>
                        <textarea name="text" className="form-control" onChange={this.handleChange} />
                    </div>

                    <button className="btn btn-primary">Send</button>
                </form>
            </div>
        );
    }
}

export default Send;
