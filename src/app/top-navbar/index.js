/** @jsx React.DOM */
var React = require('react');
var NavDropdown = require('./nav-dropdown.js');

var dropdowns = [
	{
		title: 'Preset',
		items: [
			{ title: 'All', value: 1 }, 
			{ title: 'Albums', value: 2}, 
			{ title: 'Live', value: 3}
		]
	}
];

var TopNavbar = React.createClass({

	render: function () {

		return (
			<NavDropdown title={dropdowns[0].title} items={dropdowns[0].items} icon="tag" />
		)
	}

})

module.exports = TopNavbar;