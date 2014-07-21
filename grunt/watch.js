module.exports = function(grunt){
return	{
	// files: [
	// 'src/app/**/*.html',
	// 'src/**/*.html'
	// ],
	// tasks: [],
	js: {
		files: [
		'src/app/**/*.js'
		// 'src/common/**/*.js'
		],
		tasks: ['browserify']
	},
	
	// styles: {
	// 	files: [
	// 	'src/styles/**/*.less',
	// 	'src/app/**/*.less'
	// 	],
	// 	tasks: ['includeSource', 'less:development'],
	// },

	react: {
        files: 'src/app/*.js',
        tasks: ['browserify']
    },
	gruntfile: {
		files: ['Gruntfile.js']
	},
	livereload: {
		options: {
			livereload: '<%= connect.options.livereload %>'
		},
		files: [
		'src/**/*.html',
		'src/app/**/*.js',
		// 'src/common/**/*.js',
		// 'src/services/**/*.js',
		'src/styles/**/*.css',
		'src/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
		]
	}
};
};