
exports.config = {
  runner: 'local',
  path: '/wd/hub',
  port: 4724,
  capabilities: [{
            "appium:platformName": "Android",
    "appium:platformVersion": "15.0",
    "appium:deviceName": "Medium Phone API 35",
    "appium:app": "/Users/nancy/Downloads/Android-MyDemoAppRN.1.1.0.build-226.apk",
    "appium:automationName": "UiAutomator2",
    "appium:appPackage": "com.saucelabs.mydemoapp.rn",  // App package name
    "appium:appActivity": "com.saucelabs.mydemoapp.rn.MainActivity",  // Main activity
    "appium:noReset": "true",  // Keeps the app installed between sessions
          }],
          specs: [
                    './features/**/*.feature'
                ],
  logLevel: 'info',
  framework: 'cucumber',

  reporters: [
    'spec',
    ['allure', {
        outputDir: 'allure-results',    // Directory for storing Allure results
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]
],
 
  cucumberOpts: {
      require: ['./features/step-definitions/loginsteps.js','./Common/Hooks.js'],
      timeout: 60000,
      ignoreUndefinedDefinitions: false,
  },
  services: ['appium'],
  
};
async function main() {
  const client = await remote(config.capabilities);

  // Perform actions in the app
  // ...

  // Close the app
  await client.terminateApp('com.saucelabs.mydemoapp.rn'); // Close the app

  // // Reopen the app
  // await client.activateApp('your.app.package'); // Reopen the app

  // // Clean up
  // await client.deleteSession(); // Clean up when done
}
  // other configurations...
