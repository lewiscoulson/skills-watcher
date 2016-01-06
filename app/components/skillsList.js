import React from 'react';
import {Link} from 'react-router';

let SkillsList = React.createClass({
    render() {
        return (
            <div>
                <ul>
                    {this.props.skills.map(function(skill) {
                        return (
                            <li key={skill.id}>
                                <Link to={`/skill/${skill.id}`}>{skill.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
});

export default SkillsList;
