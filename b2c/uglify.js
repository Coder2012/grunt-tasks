module.exports = {
  build: {
    options: {
      compress: {
        drop_console: true
      }
    },
    files: {
      "dist/index.min.js": ["dist/index.js"]
    }
  }
};
