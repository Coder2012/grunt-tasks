module.exports = {
    options: {
        banner: "/*" + new Date().toString() + " " + (process.env.USER || process.env.USERNAME) + "*/ \n",
        mangle: false
    },
    dist: {
        files: [{
            src: '<%= combinedJs %>' + '<%= hybrisprops.gruntcombinedversion %>' + '.js',
            dest: '<%= combinedJs %>' + '<%= hybrisprops.gruntcombinedversion %>' + '.min.js'
        }
        ]
    }
}