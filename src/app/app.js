/** @jsx React.DOM */
var React = require('react');
var YoutubePlayer = require('./player');

React.renderComponent(
   	<YoutubePlayer title="cool!"></YoutubePlayer>,
    document.body.querySelector("#youtube-player")
);