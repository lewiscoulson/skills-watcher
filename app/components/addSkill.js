import React from 'react';

let AddSkill = React.createClass({
    render() {
        return (
            <div>
                <input type="text" value={this.props.value} onChange={this.props.onChange} />
                <button type="submit" onClick={this.props.onSubmit}>Add Skill</button>
            </div>
        )
    }
});

export default AddSkill;
