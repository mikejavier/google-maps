module.exports = function(grunt) {

require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    babel: {
        options: {
            sourceMap: true,
            presets: ['es2015']
        },
        dist: {
            files: {
                'dist/app.js': 'src/app.js'
            }
        }
    },
    browserify: {
        dist: {
            files: {
              'dist/bundle.js': ['src/app.js']
            },
            options: {
                 'transform': [ ['babelify', { 'presets': ['es2015'] }] ],
                 'watch': true,
                 'keepAlive': true
            }
        }
    }
});

grunt.registerTask('default', ['browserify']);

};