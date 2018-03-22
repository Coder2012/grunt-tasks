module.exports = {
    options: {
        //loadPath: ['node_modules/foundation-sites/scss']
        loadPath: [
            '<%= baseDir %>' + 'sass/styles',
            '<%= baseDir %>' + 'sass/_partials'
        ],
    },
    dev: {
        options: {
            sourceMap: false,
            includePaths: [ '<%= baseDir %>' + 'sass/_partials']
        },
        files: [{
            expand: true,
            cwd: '<%= baseDir %>' + 'sass/styles',
            src: ['*.scss'],
            dest: '<%= themeDir %>' + 'css',
            ext: '.css'
        }]
    },
    prod: {
        options: {
            sourceMap: false
        },
        files: [{
            expand: true,
            cwd: '<%= baseDir %>' + 'sass/styles',
            src: ['*.scss'],
            dest: '<%= themeDir %>' + 'css',
            ext: '.css'
        }]
    }
}