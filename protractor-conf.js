'use strict';

var paths = require('./.yo-rc.json')['generator-gulp-angular'].props.paths;

exports.config = {

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  chromeOnly: true,
  baseUrl: 'http://localhost:8080/',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [paths.e2e + '/**/*.js'],
  framework: 'jasmine',
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
