import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';
import App from './views/app';
import Skills from './views/skills';
import Skill from './views/skills/skill';

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
        	<Route path="skills" component={Skills} />
        	<Route path="/skill/:id" component={Skill} />
        </Route>
    </Router>
), document.getElementById('app'));