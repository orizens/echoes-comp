/**
 * @jsx React.DOM
 */

var React = require('react');
var bootstrapDropdown = require('bsDropdown');

var NavDropdown = React.createClass({

	render: function() {
		var items = this.props.items.map(function(item){
			return (
				<li className="">
					<a href="#" data-value="{item.value}">
						{item.title}
					</a>
				</li>
			)
		});
		return (
			<li className="dropdown">
				<a className="dropdown-toggle" data-toggle="dropdown" href="#">
					<i className="glyphicon glyphicon-{this.props.icon}"></i> {this.props.title}
					<span className="caret"></span>
				</a>

				<ul className="dropdown-menu">
					{items}
				</ul>
			</li>
		);
	}

});

module.exports = NavDropdown;