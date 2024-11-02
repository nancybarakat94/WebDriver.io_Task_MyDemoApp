const { Given, When, Then } = require('@cucumber/cucumber');
const And = Then; 
const LandingPage = require('../pageobjects/LandingPage.js');
const LoginPage = require('../pageobjects/LoginPage.js');
const fs = require('fs');
const path = require('path');
const userData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../users.json'), 'utf8'));
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const { After } = require('@cucumber/cucumber');
const allure = require('@wdio/allure-reporter');

//for adding screenshots in allure reports when the cases are failed
After(async function (scenario) {
  if (scenario.result?.status === 'FAILED') {
      const screenshot = await browser.takeScreenshot();
      allure.addAttachment('Screenshot on Failure', Buffer.from(screenshot, 'base64'), 'image/png');
  }
});

//making sure the app is open
Given('I open the app', async function () {
  console.log("App is opening...");
});

//making sure the app is open and on landing page
And('I am on the Landing page', async () => {

  expect(LandingPage.optionsMenu).toBeDisplayed();
});

//Clicking on the side menu elemet
And('I click on the options menu', async () => {
  
  LandingPage.clickOnSideMenu();

});

//Clicking on login option of the side menu
And('I click on the login option', async () => {
 
  LandingPage.loginOption.waitForDisplayed();
  LandingPage.clickOnLoginOption();
  browser.takeScreenshot();
  await sleep(10000);  //it takes time to open the login page
  
});


//checking that i am on the login page
Given('I am on the login page', async () => {

  LoginPage.$loginPageTitle.waitForDisplayed();

  expect(LoginPage.$loginPageTitle).toBeDisplayed();
  
});

//logging in with a locked user
When('I login with the locked user', async () => {
 
  var user = userData.LOCKED;
  await LoginPage.login(user.username, user.password);
});

//Making sure that the locked message is displayed 
Then('I should see an account locked message', async () => {
 
  await expect(LoginPage.$lockedMessage).toBeDisplayed(); // Assuming lockedMessage identifies the message
});

//logging in with a no matching user
When('I login with no matching user', async () => {
  var user = userData.NO_MATCH;
  await LoginPage.login(user.username, user.password);
});

//making sure an error with no match is displayed
Then('I should see a no match message', async () => {
  await expect(LoginPage.$noMatchMessage).toBeDisplayed(); // Assuming noMatchMessage identifies the message
});

//logging in with a no user details
When('I login with no user details', async () => {
  var user = userData.NO_USER_DETAILS;
  await LoginPage.login(user.username, user.password);
});

//making sure the correct error is displaying when loogin with no user details
Then('I should see an error message for no user details', async () => {
  await expect(LoginPage.$usernameEmptyError).toBeDisplayed(); // Assuming errorMessage identifies the message
});

//logging in with no password 
When('I login with no password', async () => {
  var user = userData.NO_PASSWORD;
  await LoginPage.login(user.username, user.password);
});

//making sure the correct error message is displaying for no password
Then('I should see an error message for no password', async () => {
  await expect(LoginPage.$passwordEmptyError).toBeDisplayed(); // Assuming errorMessage identifies the message
});

//logging in with a standard user
When('I login with a standard user', async () => {
  var user = userData.STANDARD;
  await LoginPage.login(user.username, user.password);
});

//making sure the user is loggedin successfully
Then('I should see the products screen', async () => {
  await expect(LoginPage.$prodcutsTitle).toBeDisplayed();
});
