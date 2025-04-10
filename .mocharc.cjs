'use strict';

module.exports = {
  'timeout': 5000,
  'slow': 700,
  'color': true,
  'bail': true,
  'spec': './test/specs/**/*.js',
  'reporter': 'mocha-junit-reporter',
  'reporterOptions': {
    'mochaFile': './report.xml',
    'toConsole': false,
    'suiteTitleSeparatedBy': '.',
    'properties': {
      'project': 'Gorest Integration API'
    }
  }
};