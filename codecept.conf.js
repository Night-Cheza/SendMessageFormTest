const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://bluescapeqainterview.wordpress.com/contact/',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    ...require("./pages/form.page"),
    testData: "./test/form_test.js"
  },
  bootstrap: null,
  mocha: {},
  name: 'Testing'
}