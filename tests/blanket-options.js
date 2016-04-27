/* globals blanket, module */

var options = {
  modulePrefix: 'ember-frost-sidebar',
  filter: '//.*ember-frost-sidebar/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    lcovOptions: {
      outputFile: 'coverage/lcov.info',
      renamer: function (fileName) {
        return fileName.replace('ember-frost-sidebar', 'addon') + '.js'
      }
    },
    reporters: ['lcov', 'json'],
    autostart: true
  }
}
if (typeof exports === 'undefined') {
  blanket.options(options)
} else {
  module.exports = options
}
