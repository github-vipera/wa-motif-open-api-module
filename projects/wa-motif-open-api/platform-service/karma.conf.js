// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    proxies: {
      "/rest": {
        "target": "http://ec2-34-209-90-152.us-west-2.compute.amazonaws.com:8080/",
        "secure": false,
        'changeOrigin': true
      },
      "/oauth": {
        "target": "http://ec2-34-209-90-152.us-west-2.compute.amazonaws.com:8080/",
        "secure": false,
        'changeOrigin': true
      }
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9877,
    colors: true,
    logLevel: config.LOG_TRACE,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
