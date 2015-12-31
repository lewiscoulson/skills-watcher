var React = require('react/addons');
var Skill = require('./Skill.jsx');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				{
					this.props.skills.map(function(skill, index){
	          return (
	            <Skill skill={skill} key={"skill"+index} />
	          )
        	})
        }
			</div>
		)
	}
});
