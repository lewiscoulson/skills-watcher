import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import SkillsList from './../../components/skillsList';
import SkillsData from './../../data/skills';

const App = React.createClass({
    getInitialState: function() {
        return {
            skills: SkillsData
        };
    },

    render() {
        return (
            <div>
                <SkillsList skills={this.state.skills} />
            </div>
        )
    }
});

export default App;
