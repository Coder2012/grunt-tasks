module.exports = {
    dev: {
        src: '<%= baseDir %>' + 'javascript/site.js',
        dest: '<%= themeDir %>' + 'js/bundle.js',
        options: {
            browserifyOptions: {
                debug: true
            }
        }
    },
    prod: {
        src: '<%= baseDir %>' + 'javascript/site.js',
        dest: '<%= themeDir %>' + 'js/bundle.js',
    }
}