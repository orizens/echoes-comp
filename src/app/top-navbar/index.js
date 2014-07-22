/** @jsx React.DOM */
var React = require('react');
var NavDropdown = require('./nav-dropdown.js');
var NavLinks = require('./nav-links.js');

var dropdowns = {
	feed: [
		{ title: 'Videos', icon: 'film' },
		{ title: 'Playlists', icon: 'th-list' }
	],
	presets: {
		title: 'Preset',
		items: [
			{ title: 'All', value: 1 }, 
			{ title: 'Albums', value: 2}, 
			{ title: 'Live', value: 3}
		]
	},

	duration: {
		title: 'Duration',
		items: [
			{ title: "Any", value: 1 },
			{ title: "Short (less then 4 minutes)", value: 2 },
			{ title: "Medium (4-20 minutes)", value: 3 },
			{ title: "Long (longer than 20 minutes)", value: 4 }
		]
	}
};

var TopNavbar = React.createClass({

	render: function () {

		return (
			<div>
				<NavLinks items={dropdowns.feed} />
				<ul className="navbar-nav nav">
					<NavDropdown title={dropdowns.presets.title} items={dropdowns.presets.items} icon="tag" />
				</ul>
				<ul className="navbar-nav nav">
					<NavDropdown title={dropdowns.duration.title} items={dropdowns.duration.items} icon="time" />
				</ul>
			</div>
		)
	}

})

module.exports = TopNavbar;