import React, { Component } from 'react';
import { view } from '../api/email';

class View extends Component {
    state = {
        emails: []
    };

    componentWillMount = async () => {
        let emails = await view();
        this.setState({ emails: emails.data });
    };

    formatDate(sentAt) {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let date = new Date(sentAt);
        return date.toLocaleDateString('en-US', options);
    }

    renderEmails() {
        if (this.state.emails.length === 0) {
            return (
                <div className="row">
                    <div className="col-md-12">
                        <p>Please send at least one email.</p>
                    </div>
                </div>
            );
        }
        let self = this;
        return this.state.emails.map(function(email, index) {
            return (
                <div className="card border-secondary mb-3" key={index}>
                    <h3 className="card-header">
                        {email.subject}
                    </h3>
                    <div className="card-body">
                        <p className="card-text">
                            <i>
                                "{email.text}"
                            </i>
                        </p>
                    </div>
                    <div className="card-footer text-muted">
                        Sent on: {self.formatDate(email.sent_at)}
                    </div>
                </div>
            );
        });
    }

    render() {
        return this.renderEmails();
    }
}

export default View;
