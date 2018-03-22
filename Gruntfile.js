module.exports = function (grunt) {

    "use strict";

    var path = require('path');

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json")        
    });

    require('load-grunt-config')(grunt, {
        configPath: [
            path.join(process.cwd(), 'grunt-tasks')
        ],
        data: require('./grunt-project')
    })

    // on watch events configure jshint:all to only run on changed file
    grunt.event.on('watch', function (action, filepath) {
        grunt.config('jshint.all.src', filepath);
    });

    grunt.registerTask("concatcss", ["setProperties", "sass:dev", 'autoprefixer', "clean:csscombined", "concat:css", "concat:defaultcombinedcss","combine_mq:all", "file_append:combinedCssFiles"]);
    grunt.registerTask("concat-minify-css", ["concatcss", "cssmin:app", "file_append:minifiedCssFiles","clean:generatedcss","clean:generatedcssmap",]);

    grunt.registerTask("minifyjs-dev", ["setProperties", "jshint", "browserify:dev", "clean:jscombined", "concat:js", "uglify"]);
    grunt.registerTask("minifyjs-prod", ["setProperties", "browserify:prod", "clean:jscombined", "concat:js", "uglify"]);
    grunt.registerTask("MrMcFeely", ["setProperties", "sass:dev", 'autoprefixer', "clean:csscombined", "concat:css"]);

    // default task for minification testing locally
    grunt.registerTask("localdev", ["browserSync", "watch"]);
    grunt.registerTask("default", ["concat-minify-css", "minifyjs-dev"]);
    grunt.registerTask("dev", ["addEnvToFontPath:dev", "concat-minify-css", "minifyjs-dev", "azure-cdn-deploy:dev"]);
    grunt.registerTask("dev1", ["addEnvToFontPath:dev1", "concat-minify-css", "minifyjs-dev", "azure-cdn-deploy:dev1"]);
    grunt.registerTask("dev2", ["addEnvToFontPath:dev2", "concat-minify-css", "minifyjs-dev", "azure-cdn-deploy:dev2"]);
    grunt.registerTask("proofing", ["addEnvToFontPath:proofing", "concat-minify-css", "minifyjs-dev", "azure-cdn-deploy:proofing"]);
    grunt.registerTask("e2e", ["addEnvToFontPath:e2e", "concat-minify-css", "minifyjs-dev", "azure-cdn-deploy:e2e"]);
    grunt.registerTask("domane", ["addEnvToFontPath:domane", "concat-minify-css", "minifyjs-dev", "azure-cdn-deploy:domane"]);
    grunt.registerTask("madone", ["addEnvToFontPath:madone", "concat-minify-css", "minifyjs-dev", "azure-cdn-deploy:madone"]);
    grunt.registerTask("session", ["addEnvToFontPath:session", "concat-minify-css", "minifyjs-dev", "azure-cdn-deploy:session"]);
    grunt.registerTask("topfuel", ["addEnvToFontPath:topfuel", "concat-minify-css", "minifyjs-dev", "azure-cdn-deploy:topfuel"]);
    grunt.registerTask("test", ["addEnvToFontPath:test", "concat-minify-css", "minifyjs-dev", "azure-cdn-deploy:test"]);
    grunt.registerTask("prod", ["addEnvToFontPath:prod", "concat-minify-css", "minifyjs-prod", "azure-cdn-deploy:prod"]);

    grunt.registerTask('setProperties', 'Set local properties', function () {
        if (!grunt.config.get('hybrisprops')) {
            grunt.log.writeln('Loading local properties');
            grunt.task.run('properties');
            grunt.task.run('replaceProperties');
        }
    });

    grunt.registerTask('replaceProperties', 'Replace local properties gruntcombinedversion with option', function () {
        var localtag = grunt.option('localtag');
        var hybrisprops = grunt.config.get('hybrisprops');
        if (localtag && hybrisprops) {
            grunt.log.writeln('Using grunt option to set hybrisprops.gruntcombinedversion to: ' + localtag);
            hybrisprops.gruntcombinedversion = localtag;
            grunt.config.set('hybrisprops', hybrisprops);
        }
    });

    grunt.registerMultiTask('addEnvToFontPath', 'Add environment to cdn font path', function() {
        grunt.log.writeln("Adding environment [" + this.data + "] to cdn font path");
        var filePath = grunt.config.get('fontPathFilePath');
        var fontpathFile = grunt.file.read(filePath);
        var replacementFile = fontpathFile.replace('hybris/fonts', 'hybris/' + this.data + '/fonts');
        grunt.file.write(filePath, replacementFile);
    });
};
