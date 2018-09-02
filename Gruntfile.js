module.exports = function(grunt) {
    require('time-grunt')(grunt);
    var compressedJS = ['!javascript/jquery-3.3.1.min.js', '!assets/javascripts/application.b438e6c5.js', '!assets/javascripts/modernizr.1aa3b519.js', '!assets/javascripts/lunr/lunr.js', '!assets/photoswipe/photoswipe.min.js'];
    var compressedCSS = ['!assets/stylesheets/application.css', '!assets/photoswipe/photoswipe.css'];
    //初始化grunt 配置
    grunt.initConfig({
        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: {
                cwd: 'www',
                src: ['**'].concat(compressedJS, compressedCSS)
            },
            initiate: {
                cwd: 'www',
                src: ['**']
            }
        },
        copy: {
            build: {
                expand: true,
                cwd: 'mkdocsOutput',
                src: ['**', '!**/*.html', '!**/*.js,', '!**/*.css'],
                dest: 'www/'
            },
            initiate: {
                expand: true,
                cwd: 'mkdocsOutput',
                src: ['**'],
                dest: 'www/'
            }
        },
        //压缩html
        htmlmin: {
            build: {
                options: {
                    removeComments: false,
                    collapseWhitespace: true,
                    collapseInlineTagWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    removeAttributeQuotes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: 'mkdocsOutput',
                    src: ['**/*.html'],
                    dest: 'www/'
                }]
            }
        },
        //压缩css
        cssmin: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'mkdocsOutput',
                    src: ['**/*.css'].concat(compressedCSS),
                    dest: 'www/'
                }]
            }
        },
        //压缩js
        uglify: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'mkdocsOutput',
                    src: ['**/*.js'].concat(compressedJS),
                    dest: 'www/'
                }]
            }
        },
        //压缩json
        'json-minify': {
            build: {
                files: 'www/**/*.json'
            }
        },
        //其他CMD命令
        shell: {
            buildMkdocs: {
                command: 'mkdocs build'
            },
            buildCordovaHcp: {
                command: 'cordova-hcp build'
            },
            buildAndroid: {
                command: 'cordova build android'
            }
        },
        concurrent: {
            build: ['htmlmin', 'cssmin', 'uglify', 'json-minify']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-json-minify');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerInitTask('default', ['clean:build', 'copy:build', 'htmlmin', 'cssmin', 'uglify', 'json-minify']);
    grunt.registerInitTask('initiate', ['shell:buildMkdocs', 'clean:initiate', 'copy:initiate']);
    grunt.registerInitTask('multithreading', ['clean:build', 'copy:build', 'concurrent']); //文档还不够多和大，还不需要使用
    grunt.registerInitTask('buildMkdocs', ['shell:buildMkdocs']);
    grunt.registerInitTask('buildCordovaHcp', ['shell:buildCordovaHcp']);
    grunt.registerInitTask('buildAndroid', ['shell:buildAndroid']);
    grunt.registerInitTask('buildSite', ['shell:buildMkdocs', 'default', 'shell:buildCordovaHcp']);
};