var React = require('react/addons');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.data.results.map(function(item,index){
            return (
                <div>{item.matches}</div>
            )
        })}                 
			</div>
		)
	}
});
	