module.exports = function(grunt) {
  'use strict';
  var path = require('path');

  // require('load-grunt-tasks')(grunt);

  require('load-grunt-config')(grunt, {
    configPath: [
      path.join(process.cwd(), 'common'),
      path.join(process.cwd(), 'b2c'),
    ]
    ,
    jitGrunt: {
      // customTasksDir: 'tasks',
      // staticMappings: {
      //   autoprefixer: 'common/autoprefixer'
      // }
    }
  });
  
  grunt.registerTask('default', ['autoprefixer', 'uglify']);
};
