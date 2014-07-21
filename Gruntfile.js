'use strict';

module.exports = function(grunt) {
    // Define the configuration for all the tasks
    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json')
    };
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // load all external grunt plugins
    var configs = ['watch', 'connect', 'browserify'];

    configs.forEach(function(fileName){
        gruntConfig[fileName] = require('./grunt/' + fileName + '.js')(grunt);
    });

    // load the grunt Config
    grunt.initConfig(gruntConfig);

    // grunt.loadNpmTasks('grunt-browserify');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('pack', ['browserify']);

    grunt.registerTask('default', [
        'browserify',
        'connect:livereload',
        'watch'
    ]);
};