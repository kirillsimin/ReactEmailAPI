import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login';
import Register from './components/Register';
import Send from './components/Send';
import View from './components/View';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/send-email" exact component={Send} />
            <Route path="/view-emails" exact component={View} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
