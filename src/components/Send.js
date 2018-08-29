import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { send } from '../api/email';

class Send extends Component {
    state = {
        subject: '',
        text: '',
        status: null
    };

    handleSubmit = async event => {
        event.preventDefault();

        const { subject, text } = this.state;
        const response = await send(subject, text);
        if (response.status) {
            this.setState({ status: response.status });
        }
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        if (this.state.status === 201) {
            return <Redirect to="/view-emails" />;
        }

        if (this.state.status === 401) {
            return <Redirect to="/" />;
        }

        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
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
