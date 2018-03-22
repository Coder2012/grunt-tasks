module.exports = {
    app: {
        src: '<%= combinedCss %>' + '<%= hybrisprops.gruntcombinedversion %>' + '.css',
        dest: '<%= combinedMinCss %>' + '<%= hybrisprops.gruntcombinedversion %>' + '.min.css'

    }
}