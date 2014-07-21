/**
 * @jsx React.DOM
 */

var React = require('react');

var InfoBar = React.createClass({

	render: function() {
		return (
			<ul className="navbar-nav nav">

				<li>
					<div className="btn-group dropup navbar-btn">
						<button type="button" className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
							no media yet...
							 <span className="caret"></span>
						</button>
						<ul className="dropdown-menu" role="menu">
							
						</ul>
					</div>
				</li>
			</ul>
		);
	}

});

module.exports = InfoBar;