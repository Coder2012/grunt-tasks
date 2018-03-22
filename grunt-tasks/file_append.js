module.exports = {
    default_options: {
        files: [
            {
                prepend: "/*" + new Date().toString() + " " + (process.env.USER || process.env.USERNAME) + "*/ \n",
                input: '<%= combinedMinCss %>' + '<%= hybrisprops.gruntcombinedversion %>' + '.min.css',
                output: '<%= combinedMinCss %>' + '<%= hybrisprops.gruntcombinedversion %>' + '.min.css'
            }
        ]
    },
    combinedCssFiles: {
        files: [
            {
                prepend: "/*" + new Date().toString() + " " + (process.env.USER || process.env.USERNAME) + "*/ \n",
                input: '<%= combinedCss %>' + '<%= hybrisprops.gruntcombinedversion %>' + '.css',
                output: '<%= combinedCss %>' + '<%= hybrisprops.gruntcombinedversion %>' + '.css'
            }
        ]
    },
    minifiedCssFiles: {
        files: [
            {
                prepend: "/*" + new Date().toString() + " " + (process.env.USER || process.env.USERNAME) + "*/ \n",
                input: '<%= combinedMinCss %>' + '<%= hybrisprops.gruntcombinedversion %>' + '.min.css',
                output: '<%= combinedMinCss %>' + '<%= hybrisprops.gruntcombinedversion %>' + '.min.css'
            }
        ]
    }
}