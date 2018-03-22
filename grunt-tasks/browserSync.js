module.exports = {
    dev: {
        bsFiles: {
            src : [
                '<%= themeDir %>' + 'css/*.css',
                '<%= baseDir %>' + 'javascript/**/*.js',
                '<%= baseDir %>' + 'webroot/WEB-INF/views/**/*.jsp',
                '<%= baseDir %>' + 'webroot/WEB-INF/tags/**/*.tag'
            ]
        },
        options: {
            watchTask: true,
            proxy: 'https://local.trekbikes.com:9002',
            browser: ['google chrome', 'firefox', 'safari']
        }

    }
}