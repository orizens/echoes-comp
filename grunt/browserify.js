module.exports = function(grunt) {
	return {
	    options: {
	        transform: [ require('grunt-react').browserify ],
	        alias: [
	        	'src/bower_components/bootstrap/js/dropdown.js:bsDropdown',
	        	'src/bower_components/react/react.js:react',
	        	'src/bower_components/react-bootstrap:react-bootstrap'
	        ],
	        bundleOptions: {
	        	debug: true
	        }
	    },
	    client: {
	        src: ['src/app/**/*.js'],
	        dest: 'src/bundle.js'
	    }
	};
};