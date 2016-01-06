import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>Skills Watcher</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                </ul>
                
                {this.props.children}
            </div>
        )
    }
});

export default App;
