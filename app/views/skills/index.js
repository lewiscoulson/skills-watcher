import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import SkillsList from './../../components/skillsList';
import AddSkill from './../../components/AddSkill';
import SkillsData from './../../data/skills';

const App = React.createClass({
    getInitialState: function() {
        return {
            skills: SkillsData,
            value: ''
        };
    },

    onSubmit: function(e) {
        e.preventDefault();

        this.state.skills.push({
            id: '10',
            name: this.state.value,
            demandChart: 'http://www.itjobswatch.co.uk/charts/contract-demand-trend.aspx?s=html5&l=london',
            dayRateChart: 'http://www.itjobswatch.co.uk/charts/daily-rate-histogram.aspx?s=html5&l=london'
        });

        this.setState({
            skills: this.state.skills
        });
    },

    onChange: function(e) {
        let newValue = e.target.value;

        this.setState({
            value: newValue
        });
    },

    render() {
        return (
            <div>
                <AddSkill value={this.state.value} onChange={this.onChange} onSubmit={this.onSubmit} />
                <SkillsList skills={this.state.skills} />
            </div>
        )
    }
});

export default App;
