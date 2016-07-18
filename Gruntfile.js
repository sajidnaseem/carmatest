// JavaScript Document
module.exports = function(grunt) {
  // Do grunt-related things in here
// Project configuration. 
grunt.initConfig({
  concat: {
    options: {
      separator: ';',
    },
    js: {
      src: [
	  'js/app.js'
	  ],
      dest: 'dist/js/script.js',
    },
	 css: {
      src: [
	  		'css/carma.css'
	  ],
      dest: 'dist/css/style.css',
    },
  },
  jshint: {
    all: ['Gruntfile.js']
  },
  uglify: {
    options: {
      mangle: true
    },
    my_target: {
      files: {
        'lib/script.min.js': ['dist/js/script.js']
      }
    }
  },
  watch: {
  js: {
    files: ['js/**/*.js'],
    tasks: ['concat'],
    options: {
      spawn: false,
    },
  },
  css:{
    files: ['css/**/*.css'],
    tasks: ['concat'],
    options: {
      spawn: false,
    },
  },
},

  cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'dist/css',
      src: ['*.css', '!*.min.css'],
      dest: 'lib/css',
      ext: '.min.css'
    }]
  }
},
react: {
    single_file_output: {
      files:[ {
        'build/slider/carmaSlider.js': 'js/react/carmaSlider.js',
		'build/chat/carmaChat.js': 'js/react/carmaChat.js'
      }
	  ]
	  
    },
    combined_file_output: {
      files: {
        'lib/combined.js': [
          'js/react/carmaSlider.js',
		  'js/react/carmaChat.js'
        ]
      }
    },
    dynamic_mappings: {
      files: [
        {
          expand: true,
          cwd: 'path/to/jsx/templates/dir',
          src: ['**/*.jsx'],
          dest: 'path/to/output/dir',
          ext: '.js'
        }
      ]
    }
  },
jsx: {
        client: {
          src: 'js/react/carmaSlider.js',
          dest: 'build/carmaSlider.js',
        }
	},
	sass: {                              // Task 
    dist: {                            // Target 
      options: {                       // Target options 
        style: 'expanded'
      },
      files: {                         // Dictionary of files 
        'main.css': 'main.scss',       // 'destination': 'source' 
        'widgets.css': 'widgets.scss'
      }
    }
  }
});
	  grunt.loadNpmTasks('grunt-contrib-concat');
	  grunt.loadNpmTasks('grunt-contrib-watch');
	  grunt.loadNpmTasks('grunt-contrib-jshint');
	  grunt.loadNpmTasks('grunt-contrib-uglify');
	  grunt.loadNpmTasks('grunt-contrib-cssmin');
	  grunt.loadNpmTasks('grunt-processhtml');
	  grunt.loadNpmTasks('grunt-react');
	  grunt.loadNpmTasks('grunt-jsx');
	  grunt.loadNpmTasks('grunt-contrib-sass');
};