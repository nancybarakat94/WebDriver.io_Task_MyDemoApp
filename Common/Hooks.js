import { Before, After } from '@cucumber/cucumber';

// Open the app before each scenario
Before(async () => {
    await driver.launchApp();  // Reopens the app if it was closed
});

// Close or reset the app after each scenario
After(async () => {
    await driver.terminateApp('com.saucelabs.mydemoapp.rn');  // Replace with your app package
});