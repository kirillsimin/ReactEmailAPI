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

    renderEmails() {
        return this.state.emails.map(function(email, index) {
            return (
                <div className={['panel', 'panel-default']} key={index}>
                    <div className="panel-heading">
                        {email.subject}
                    </div>
                    <div className="panel-body">
                        <p>
                            {email.text}
                        </p>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">View</p>
                {this.renderEmails()}
            </div>
        );
    }
}

export default View;
