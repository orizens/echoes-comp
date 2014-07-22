/** @jsx React.DOM */
var React = require('react');
var YoutubePlayer = require('./player');
var TopNavbar = require('./top-navbar');

React.renderComponent(
   	<YoutubePlayer title="cool!"></YoutubePlayer>,
    document.body.querySelector("#youtube-player")
);

React.renderComponent(
   	<TopNavbar></TopNavbar>,
    document.body.querySelector("#nav-collapse")
);