import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';
import App from './views/app';
import Skills from './views/skills';

ReactDOM.render((
    <Router>
        <Route path="/" component={App} />
        <Route path="/skills" component={Skills} />
    </Router>
), document.getElementById('app'));
