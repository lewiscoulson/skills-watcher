import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import _ from 'lodash';
import SkillsList from './../../components/skillsList'
import SkillsData from './../../data/skills';

let Skill = React.createClass({
    getInitialState: function() {
        return {
            skills: SkillsData
        };
    },

    componentWillMount: function() {
        this.setState({
            skill: _.findWhere(this.state.skills, {id: this.props.params.id})
        });
    },

    render() {
        return (
            <div>
                <h2>{this.state.skill.name}</h2>
                <h3>Demand</h3>
                <img src={this.state.skill.demandChart} alt="" />
                <h3>Day rates</h3>
                <img src={this.state.skill.dayRateChart} alt="" />
            </div>
        )
    }
});

export default Skill;
