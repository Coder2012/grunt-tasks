module.exports = {
    all: {
        expand: true,
        cwd: '<%= themeDir %>' + 'css/',
        src: ['**/*.css'],
        dest: '<%= themeDir %>' + 'css/'
    }
}