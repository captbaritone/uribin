module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        inline: {
            dist: {
                options:{
                    tag: 'inline', // Inline all the things
                    uglify: true,
                    cssmin: true
                },
                src: 'src/index.html',
                dest: 'build/index.inline.html',
            }
        },
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            dist: {
                files: {
                    'build/index.min.html': 'build/index.inline.html'
                }
            }
        },
        text2datauri:  {
            'build/index.url': 'build/index.min.html',
            options: {
                encoding: 'uri',
                targetCharset: ''
            }
        }
    });

    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('text2datauri');

    grunt.registerTask('default', ['inline', 'htmlmin', 'text2datauri']);

};
