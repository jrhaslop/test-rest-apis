'use strict';

module.exports = {
  'timeout': 5000,
  'slow': 700,
  'color': true,
  'bail': true,
  'spec': './test/specs/**/*.js',
  'reporter': 'spec',
  'reporterOptions': {
    'mochaFile': './report.xml',
    'toConsole': true,
    'suiteTitleSeparatedBy': '.',
    'properties': {
      'project': 'Gorest Integration API'
    }
  }
};