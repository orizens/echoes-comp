/** @jsx React.DOM */
var React = require('react');
var YoutubePlayer = require('./player/YoutubePlayer.js');

React.renderComponent(
   	<YoutubePlayer title="cool!"></YoutubePlayer>,
    document.body.querySelector("#youtube-player")
);