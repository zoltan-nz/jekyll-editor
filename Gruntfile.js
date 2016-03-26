module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-bump');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bump: { options: { push: false } },
        jshint: {
            'grunt': 'Gruntfile.js',
            'app': 'src/client/js/**/*.js'
        },
        mochaTest: { test: { src: ['test/server/**/*.js'] } },
        karma: {
            continuous: { configFile: 'test/client/karma.conf.js' },
            single: {
                configFile: 'test/client/karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        }
    });
    grunt.registerTask('test', [
        'jshint',
        'mochaTest',
        'karma:single'
    ]);
    grunt.registerTask('default', ['test']);
};