/**
 * @jsx React.DOM
 */

var React = require('react');

var NavLinks = React.createClass({

	render: function() {
		var items = this.props.items.map(function(item){
			var icon = "glyphicon glyphicon-" + item.icon;
			return (
				<li>
		        	<a href="#"><i className={icon} ></i> {item.title}</a>
		        </li>
	       )
		});

		return (
			<ul className="nav navbar-nav">
		        {items}
			</ul>
		);
	}

});

module.exports = NavLinks;