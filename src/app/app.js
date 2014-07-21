/** @jsx React.DOM */
var React = require('react');

React.renderComponent(
   	<div title="cool!">This is the youtube player</div>,
    document.body.querySelector("#youtube-player")
);