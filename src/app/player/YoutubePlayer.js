/** @jsx React.DOM */
var React = require('react');
var PlayerControls = require('./controls');
var InfoBar = require('./info');
var ytPlayerButtons = [
	'chevron-up',
	'fullscreen',
	'step-backward',
	'pause',
	'play',
	'step-forward'
];

var YoutubePlayer = React.createClass({

	render: function () {
		
		return (
			<div className="container-fluid">
				<div className="yt-player ux-maker">
					<div id="player"></div>
				</div>

				<PlayerControls buttons={ytPlayerButtons} />

				<InfoBar media="my media" />

			</div>
		)
	}

})

module.exports = YoutubePlayer;