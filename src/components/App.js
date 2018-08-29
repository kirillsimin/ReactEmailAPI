import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Send from './Send';
import View from './View';
import Layout from './Layout';
import AuthContext from '../AuthContext';

export default class App extends Component {
    state = {};

    setToken(jwt) {
        this.setState({ jwt });
        localStorage.setItem('jwt', jwt);
    }

    componentWillMount() {
        const token = localStorage.getItem('jwt');
        if (token) this.setToken(token);
    }

    handleAuth = jwt => {
        this.setToken(jwt);
    };

    render() {
        const { jwt } = this.state;

        return (
            <AuthContext.Provider value={this.handleAuth}>
                <Layout jwt={jwt}>
                    <Switch>
                        {!jwt && <Route path="/" exact component={Login} />}
                        {!jwt && <Route path="/register" exact component={Register} />}
                        {!jwt && <Redirect to="/" />}

                        {jwt && <Route path="/send-email" exact component={Send} />}
                        {jwt && <Route path="/view-emails" exact component={View} />}
                        {jwt && <Redirect to="/send-email" />}
                    </Switch>
                </Layout>
            </AuthContext.Provider>
        );
    }
}
