require('ts-node/register')
const { setHeadlessWhen } = require('@codeceptjs/configure');
const { bootstrap } = require('./presettings.ts');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/**.spec.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://reqres.in/',
      show: true,
      windowSize: '1200x900',
      browser: 'chromium'
    },
    CustomHelper: {
      require: './CustomHelper.ts'
    }
  },
  bootstrap,
  include: {
    loginPage: './loginPage.ts',
    homePage: './homePage.ts'
  },
  name: 'typescript-e2e-tests',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}