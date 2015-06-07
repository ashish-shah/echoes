exports.config = {
  capabilities: {
    'browserstack.user' : process.env.bs_user,
    'browserstack.key' : process.env.bs_key,

    // Needed for testing localhost
    'browserstack.local' : 'true',
    'browserstack.debug': 'true',

    // Settings for the browser you want to test
    'browserName' : 'Chrome',
    'browser_version' : '39.0',
    'os' : 'OS X',
    'os_version' : 'Mavericks',
    'resolution' : '1280x960'
  },
  
  // Browserstack's selenium server address
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',

  // Pattern for finding spec files
  specs: ['../../tests/e2e/**/*spec.js']
}