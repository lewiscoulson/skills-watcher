import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import _ from 'lodash';
import SkillsList from './../../components/skillsList';
import SkillsSelect from './../../components/skillsSelect';
import SkillsData from './../../data/skills';

let Skill = React.createClass({
    getInitialState: function() {
        return {
            skills: SkillsData,
            compareAgainst: '',
            compareAgainstData: {}
        };
    },

    componentWillMount: function() {
        this.setState({
            skill: _.findWhere(this.state.skills, {id: this.props.params.id})
        });
    },

    compareSkill: function(e) {
        let value = e.target.value;

        this.setState({
            compareAgainst: value,
            compareAgainstData: _.findWhere(this.state.skills, {'name': value})
        });
    },

    render() {

        return (
            <div>
                <SkillsSelect changeHandler={this.compareSkill} skills={this.state.skills} />
                <h2>{this.state.skill.name}</h2>
                <h3>Demand</h3>
                <img src={this.state.skill.demandChart} alt="" />
                <h3>Day rates</h3>
                <img src={this.state.skill.dayRateChart} alt="" />

                <div className={this.state.compareAgainst ? 'show' : 'hide'}>
                    <h2>{this.state.compareAgainstData.name}</h2>
                    <h3>Demand</h3>
                    <img src={this.state.compareAgainstData.demandChart} alt="" />
                    <h3>Day rates</h3>
                    <img src={this.state.compareAgainstData.dayRateChart} alt="" />
                </div>
               
            </div>
        )
    }
});

export default Skill;
