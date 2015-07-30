module.exports = function (grunt) {
    grunt.initConfig({

        meta: {
            appName:            'style',
            cssDist:            'dist/',
            cssSrc:             'sass/',
            appCssDist:         '<%= meta.appName %>.css',
            appCssSrc:          '<%= meta.appName %>.scss'
        },

        watch: {
            files: [ '<%= meta.cssSrc %>', '<%= meta.cssSrc %>{,*/,*/*/}*{<%= meta.preprocessorName %>,sass}'],
            tasks: [ 'clean:start', 'sass']
        },

        clean: {
            start: [ '<%= meta.cssDist %>**/*' ]
        },

        sass: {
            app: {
                files: {
                    '<%= meta.cssDist %><%= meta.appCssDist %>': '<%= meta.cssSrc %><%= meta.appCssSrc %>'
                },
                options: {
                    style: 'extended'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['clean:start', 'sass']);
};