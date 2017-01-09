module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                'bin/*.js',
                'public/*/*.js',
                'script/*/*.js',
                'app.js',
                'Gruntfile.js'

            ],
            options: {
                browser: true,            // browser environment
                devel: true   ,           //
                reporter: require('jshint-html-reporter'),
                reporterOutput: 'report/jshint/jshint-report.html'
            }
        },
        jscs: {
            src: [ 'bin/*.js',
                'public/*/*.js',
                'script/*/*.js',
                'app.js',
                'Gruntfile.js'
            ],
            options: {
                config: '.jscsrc',
                reporter: require('jscs-html-reporter').path,
                reporterOutput: 'report/jscs/jscs-report.html'
            }
        },
        qunit: {
            all: ['test/**/*.html']
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },


            buildb: {
                files: {
                    'dist/public/javascripts/back.js': ['public/javascripts/back.js']
                }
            },
            buildc: {
                files: {
                    'dist/routes/index.js': ['routes/index.js']
                }
            },
            buildd: {
                files: {
                    'dist/script/common/spider.js': ['script/common/spider.js']
                }
            },
            builde: {
                files: {
                    'dist/script/common/getComment.js': ['script/common/getComment.js']
                }
            },
            buildf: {
                files: {
                    'dist/app.js': ['app.js']
                }
            },
        },
        copy: {
            main: {
                files: [
                    /*includes files within path
                    {expand: true, src: ['node_modules/*'], dest: 'dist/'},

                    // includes files within path and its sub-directories
                    {expand: true, src: ['views/**'], dest: 'dist/'},

                    // makes all src relative to cwd
                    {expand: true, src: ['public/images/**'], dest: 'dist/'},
                    {expand: true, src: ['public/stylesheets/**'], dest: 'dist/'},
                    {expand: true, src: ['public/javascripts/**'], dest: 'dist/'},
                    {expand: true, src: ['data/**'], dest: 'dist/'},
                    {expand: true, src: ['package.json'], dest: 'dist/'},*/
                    {expand: true, src: ['bin/www'], dest: 'dist/'},
                ],
            },
        },
		zip: {
			'zip/package.zip': ['bin/*','routes/*','**/**']
		}

    });

    // 加载包含 "jshint" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // 加载包含 "jshint" 任务的插件。
    grunt.loadNpmTasks('grunt-jscs');

    //加载'qunit'单元测试插件
    grunt.loadNpmTasks('grunt-contrib-qunit');

    //加载’uglify‘压缩插件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //加载’copy‘复制插件
    grunt.loadNpmTasks('grunt-contrib-copy');
	// Load in `grunt-zip` 
	grunt.loadNpmTasks('grunt-zip');
};
