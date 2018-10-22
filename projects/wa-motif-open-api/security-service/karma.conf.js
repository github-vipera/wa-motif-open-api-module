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
      "/rest/v2": {
        "target": "http://ec2-34-209-90-152.us-west-2.compute.amazonaws.com:8080/rest/v2",
        "secure": false,
        'changeOrigin': true
      },
      "/oauth2": {
        "target": "http://ec2-34-209-90-152.us-west-2.compute.amazonaws.com:8080/oauth2",
        "secure": false,
        'changeOrigin': true
      }
    },
    proxyRes: function(proxyRes, req, res, options) {
      proxyRes.headers['Access-Control-Expose-Headers'] = '*';
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    customLaunchers: {
      Chrome_with_debugging: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9222'],
        debug: true
      }
    },
    browsers: ['Chrome_with_debugging'],
    singleRun: false
  });
};
