
import React from 'react';

let SkillsSelect = React.createClass({
   	changeHandler: function(e) {
   		this.props.changeHandler(e);
   	},

   	render() {
    	var skills = this.props.skills.map(function(item) {
            return (
                <option value={item.name} key={item.id}>{item.name}</option>
            );
        });

        return (
        	<div>
        		<select onChange={this.changeHandler}>
        			<option value="">compare against...</option>
        			{skills}
        		</select>
        	</div>
        );
    }
});

export default SkillsSelect;