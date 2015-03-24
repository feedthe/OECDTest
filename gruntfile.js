module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		less:{
			compile:{
				files:{
					'css/site.css' : 'less/site.less'
				}
			}
		},
		concat: {
		  options: {
			separator: ';'
		  },
		  dist: {
			// the files to concatenate
			src: ['scripts/*.js'],
			// the location of the resulting JS file
			dest: 'js/site.js'
		  }
		},
		uglify: {
		  
		  dist: {
			files: {
			  'js/site.min.js': ['<%= concat.dist.dest %>']
			}
		  }
		}
		
		

	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['less', 'concat','uglify'])
}