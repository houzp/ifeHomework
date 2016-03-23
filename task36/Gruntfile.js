/**
 * @project love
 * @file    Gruntfile.js
 * @author  St. <st_sister@icloud.com>
 * @time    2016-02-15-13.48
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/**\n'+
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> Xinhuanet Inc. All rights reserved.\n' +
                ' * <%= pkg.name %>\n' +
                ' * @time <%= grunt.template.today("yyyy-mm-dd-HH.MM.ss") %>\n' +
                ' */\n',
        // js混淆压缩
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            execute: {
                files: {
                    // 'js/jquery.npc_cppcc_cover.min.js': ['js/jquery.npc_cppcc_cover.js']
                    //'static/xxjxsArea.pic3D.min.js': ['static/xxjxsArea.pic3D.js']
                }
            }
        },
        // css压缩
        cssmin: {
            options: {
                //shorthandCompacting: false,
                //roundingPrecision: -1
            },
            execute: {
                files: {
                    'static/xxjxsArea.filp.min.css': ['static/xxjxsArea.filp.css']
                }
            }
        },
        // 给压缩后的css添加注释
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            cssAddBanner: {
                files: {
                    'static/xxjxsArea.filp.min.css': ['static/xxjxsArea.filp.min.css']
                }
            }
        },
    });
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['cssmin', 'concat']);
    //grunt.registerTask('default', ['uglify', 'cssmin', 'concat']);
    // grunt.registerTask('default', ['uglify']);
};
