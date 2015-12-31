var React = require('react/addons');
var SkillChart = require('./components/SkillChart.jsx');
var $ = require('jquery');
var _ = require('lodash');

var id = $('body').attr('data-id');

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
		id: 1,
		results: [
			{date: '01/12/15', matches: '10'},
			{date: '01/01/16', matches: '12'},
			{date: '01/02/16', matches: '18'}
		]
	},
	{
		name: 'Javascript',
		id: 2,
		results: [
			{date: '01/12/15', matches: '1000'},
			{date: '01/01/16', matches: '1200'},
			{date: '01/02/16', matches: '1800'}
		]
	}
];

var obj = _.find(skills, function(obj) { return obj.id == id });

console.log('i', id);
console.log('o', obj);

React.render(<SkillChart data={obj}  />, app);