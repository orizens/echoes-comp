/** @jsx React.DOM */
var React = require('react');
var ButtonGroup = require('react-bootstrap').ButtonGroup;
var Button = require('react-bootstrap').Button;

var PlayerControls = React.createClass({

	render: function() {
		var buttons = this.props.buttons.map(function(button){
			var btnClass = "glyphicon glyphicon-" + button;
			return (<Button className="navbar-btn"><i className={btnClass}></i></Button>)
		});

		return (
			<ul className="navbar-nav nav">
				<li>
					<ButtonGroup>
						{buttons}
					</ButtonGroup>
				</li>
			</ul>
		)
	}
})

module.exports = PlayerControls;