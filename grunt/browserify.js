module.exports = function(grunt) {
	return {
	    options: {
	        transform: [ require('grunt-react').browserify ],
	        alias: [
	        	'src/bower_components/react/react.js:react',
	        	'src/bower_components/react-bootstrap:react-bootstrap'
	        ]
	    },
	    client: {
	        src: ['src/app/**/*.js'],
	        dest: 'src/bundle.js'
	    }
	};
};