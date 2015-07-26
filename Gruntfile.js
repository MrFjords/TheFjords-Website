module.exports = function(grunt) {


  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'stylesheets/dev/style-mq.css':     'scss/style-mq.scss',
          'stylesheets/dev/style-no-mq.css':  'scss/style-no-mq.scss'
        }
      }
    },
    cssmin: {
      options: {
        banner : " /* David Brown */ ",
        report : "gzip" 
      },
      dist: {
        files: {
          'stylesheets/style-mq.min.css': ['stylesheets/dev/style-mq.css', 'stylesheets/plugins/icon-font.css', 'stylesheets/plugins/magnific-popup.css'],
          'stylesheets/style-no-mq.min.css': ['stylesheets/dev/style-no-mq.css', 'stylesheets/plugins/icon-font.css', 'stylesheets/plugins/magnific-popup.css']
        }
      }
    },
    watch: {
      css: {
        files: ['scss/**/*.scss'],
        tasks: ['buildcss'],
        
      },
      // html: {
      //   files: ['**/*.php'],
      //   tasks: ['htmlhint'],
      // },
      options: {
        livereload: true,
      },
    },
    imagemin: {                          // Task
        dynamic: {                         // Another target
          files: [{
            expand: true,                  // Enable dynamic expansion
            cwd: 'images/',                   // Src matches are relative to this path
            src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
            dest: 'img/'                  // Destination path prefix
          }]
        }
      }
  });

  // Load the plugin that provides the "uglify" task.


  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('buildcss',  ['sass', 'cssmin']);

};