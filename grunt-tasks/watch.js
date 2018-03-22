module.exports = {
    options: {
    },
    javascript: {
        options: {
            spawn: false,
        },
        files: ['<%= baseDir %>' + 'javascript/**/*.js'],
        tasks: ['jshint', 'browserify:dev']
    },
    sass: {
        options: {
        },
        files: ['<%= baseDir %>' + 'sass/**/*.scss'],
        tasks: ['MrMcFeely']
    },
    css: {
        files: ['<%= themeDir %>' + 'css/*.css'],
        tasks: []
    }
}