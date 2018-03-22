module.exports = {
    css: {
        src: '<%= cssFiles %>',
        dest: '<%= combinedCss %>' + '<%= hybrisprops.gruntcombinedversion %>' + '.css'
    },
    defaultcombinedcss: {
        src: '<%= cssFiles %>',
        dest: '<%= combinedCss %>' + '.css'
    },
    js: {
        src: '<%= jsFiles %>',
        dest: '<%= combinedJs %>' + '<%= hybrisprops.gruntcombinedversion %>' + '.js'
    }
}