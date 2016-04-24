'use strict';

module.exports = function(grunt) {

	grunt
			.initConfig({
				clean : {
					options : {
						force : true
					},
					build : [ 'dist/**/' ]
				},
				compass : {
					dist : {
						options : {
							sassDir : 'src/sass',
							cssDir : 'dist/css',
							noLineComments : true
						}
					}
				},
				lineremover : {
					noOptions : {
						files : {
							'dist/css/my-bootstrap.css' : 'dist/css/my-bootstrap.css'
						}
					}
				},
				copy : {
					main : {
						files : [
								{
									expand : true,
									cwd : 'src/fonts',
									src : [ '**/*.*' ],
									dest : 'dist/fonts'
								},
								{
									expand : true,
									cwd : 'bower_components/bootstrap-sass/assets/fonts',
									src : [ '**/*.*' ],
									dest : 'dist/fonts'
								},
								{
									expand : true,
									cwd : 'bower_components/bootstrap-sass/assets/javascripts',
									src : [ 'bootstrap.js', 'bootstrap.min.js' ],
									dest : 'dist/js'
								}, {
									expand : true,
									cwd : 'src/examples',
									src : [ '*.*' ],
									dest : 'dist'
								}, {
									expand : true,
									cwd : 'src/img',
									src : [ '*.*' ],
									dest : 'dist/img'
								} ]
					}
				},
				cssmin : {
					target : {
						files : [ {
							expand : true,
							cwd : 'dist/css',
							src : [ '*.css', '!*.min.css' ],
							dest : 'dist/css',
							ext : '.min.css'
						} ]
					}
				},
				watch : {
					scripts : {
						files : [ 'src/**/*.*', ],
						tasks : [ 'compass', 'copy' ],
						options : {
							spawn : false,
						},
					},
				}
			});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-line-remover');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [ 'clean', 'compass', 'lineremover', 'copy',
			'cssmin' ]);
};