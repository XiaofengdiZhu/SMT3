module.exports = function (grunt)
{
    //初始化grunt 配置
    grunt.initConfig(
    {

        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),
        clean:
        {
            build:
            {
                src: 'www/*'
            }
        },
        copy:
        {
            build:
            {
                expand: true,
                cwd: 'mkdocsOutput',
                src: '**',
                dest: 'www/'
            }
        },
        //压缩html
        htmlmin:
        {
            build:
            {
                options:
                {
                    removeComments: false,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'mkdocsOutput',
                        src: ['**/*.html'],
                        dest: 'www/'
                    }
                ]
            }
        },
        //压缩css
        cssmin:
        {
            build:
            {
                files: [
                    {
                        expand: true,
                        cwd: 'mkdocsOutput',
                        src: ['**/*.css'],
                        dest: 'www/'
                    }
                ]
            }
        },
        //转es6为es5
        babel:
        {
            options:
            {
                sourceMap: false,
                presets: ['babel-preset-es2015']
            },
            build:
            {
                files: [
                    {
                        expand: true,
                        cwd: 'mkdocsOutput',
                        src: ['javascript/*.js','service-worker.js'],
                        dest: 'www/'
                    }
                ]
            }
        },
        //压缩js
        uglify:
        {
            build:
            {
                files: [
                    {
                        expand: true,
                        cwd: 'www',
                        src: ['**/*.js'],
                        dest: 'www/'
                    }
                ]
            }
        }
    }
    );
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerInitTask('default', ['clean', 'copy', 'htmlmin', 'cssmin', 'babel', 'uglify']);
};
