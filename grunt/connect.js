// The actual grunt server settings
module.exports = function(grunt) {
	return {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '0.0.0.0',
        // hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: 'http://127.0.0.1:<%= connect.options.port %>',
          base: [
            'src'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            'src'
          ]
        }
      },
      dist: {
        options: {
          base: 'dist'
        }
      }
    };
};