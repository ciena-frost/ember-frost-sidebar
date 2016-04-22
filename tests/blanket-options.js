/* globals blanket, module */

var options = {
  modulePrefix: 'ember-frost-sidebar',
  filter: '//.*ember-frost-sidebar/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['json'],
    autostart: true
  }
};

if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
