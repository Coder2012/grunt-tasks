module.exports = {
    all: {
        src: ['<%= baseDir %>' + "javascript/**/*.js"]
    },
    options: {
        asi: true,
        reporterOutput: "", 
        browser: true,
        browserify: true,
        jquery: true,
        laxbreak: true,
        globals: {
            _log: true
        }
    }
}