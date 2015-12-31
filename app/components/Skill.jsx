var React = require('react/addons');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<a href={'skills/' + this.props.skill.id}>{this.props.skill.name}</a>
			</div>
		)
	}
});
	