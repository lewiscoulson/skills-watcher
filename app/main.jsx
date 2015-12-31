var React = require('react/addons');
var SkillsList = require('./components/SkillsList.jsx');

var skills = [
	{
		name: 'HTML 5',
		id: 0,
		results: [
			{date: '01/12/15', matches: '100'},
			{date: '01/01/16', matches: '120'},
			{date: '01/02/16', matches: '180'}
		]
	},
	{
		name: 'CSS3',
		id: 1
	},
	{
		name: 'Javascript',
		id: 2
	}
];

React.render(<SkillsList skills={skills} />, app);

