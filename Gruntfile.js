module.exports = function(grunt) {
  // jit-grunt will load only the tasks we use; add mappings for plugins jit can't detect
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    usemin: 'grunt-usemin'
  });

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/styles.css': 'css/styles.scss'
        }
      }
    },
    copy: {
      main: {
        expand: true,
        src: ['*.html', 'css/*.css', 'img/**'],
        dest: 'distri/'
      }
    },
    clean: ['distri'],
    browserSync: {
      dev: {
        bsFiles: {
          src: ['*.html', 'css/*.css']
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    },
    watch: {
      styles: {
        files: ['css/*.scss'],
        tasks: ['sass']
      },
      html: {
        files: ['*.html']
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'distri/img/'
        }]
      }
    },
    useminPrepare: {
      html: '*.html',
      options: {
        dest: 'distri'
      }
    },
    concat: {},
    cssmin: {},
    uglify: {},
    filerev: {
      options: {
        algorithm: 'md5',
        length: 8
      },
      files: {
        src: ['distri/css/*.css', 'distri/js/*.js']
      }
    },
    usemin: {
      html: ['distri/*.html'],
      options: {
        assetsDirs: ['distri', 'distri/css', 'distri/js']
      }
    }
  });

  // tasks similar to tutorial snippet
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('img:compress', ['imagemin']);
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('build', [
    'clean',
    'sass',
    'copy',
    'imagemin',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'filerev',
    'usemin'
  ]);
};