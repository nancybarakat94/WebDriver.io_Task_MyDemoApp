# Webdriver.io Project with Appium , Cucumber and Page Object Model (POM) Setup

### Prerequisites

1. **[Install VSCode](https://code.visualstudio.com/download)**
2. **Node.js (LTS version recommended, Download Node.js)**
3. **npm or yarn (comes with Node.js)**
4. **Java Development Kit (JDK) (only if using Appium for mobile automation, Download JDK)**
5. **Appium Inspector download (https://github.com/appium/appium-inspector/releases)**
6. **Android Studio download (https://developer.android.com/studio)**
   
### Step 1: Set Up Android Environment Variables

1. After installing Android Studio, configure the environment variables for the Android SDK:

- **ANDROID_HOME**: Set this to the path where the Android SDK is installed (e.g., `/Users/your-username/Library/Android/sdk` on macOS or `C:\Users\your-username\AppData\Local\Android\Sdk` on Windows).
- **PATH**: Add the following paths to your `PATH` variable:
  - `$ANDROID_HOME/tools`
  - `$ANDROID_HOME/platform-tools`

2. Confirm that Android SDK is accessible:
  - <code>adb devices</code>

### Step 2: Initialize Your Project
1. Create a new directory for your project and navigate to it:
  - <code>mkdir my-android-webdriverio-project</code>
    <code>cd my-android-webdriverio-project</code>

2. Initialize a new Node.js project:
  - <code>npm init -y</code>

### Step 3: Install WebdriverIO CLI
Install WebdriverIO globally (optional) to make the CLI available system-wide:
<code>npm install -g @wdio/cli</code> 

### Step 4: Install WebdriverIO, Appium, and Cucumber
Now, install WebdriverIO along with Appium, Cucumber, and required plugins:
 <code>npm install @wdio/cli @wdio/local-runner@wdio/cucumber-framework @wdio/appium-service appium</code>

### Step 5: Configure WebdriverIO
Generate the WebdriverIO configuration file:
 <code>npx wdio config</code>
 During the configuration process, make the following selections:

1. Choose **local** as the test runner.
2. Select **cucumber** as the test framework.
3. Add **spec** as the reporter.
4. Add **appium** as a service.
5. Specify `./features/**/*.feature` as the feature file path.
6. Set `./features/step-definitions/` as the step definition path.

After completing the setup, the configuration will be saved as `wdio.conf.js`.

## Example `wdio.conf.js` Modifications for Android

In `wdio.conf.js`, update the capabilities to specify the Android device:

<code>
capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android Emulator',
    'appium:platformVersion': '11.0', // Update as per your emulator or device version
    'appium:app': '/path/to/your/app.apk',
    'appium:automationName': 'UiAutomator2',
}] </code>

### Step 6: Make sure that Allure reports is downloaded
The reporter generates test data in Allure format, while the commandline tool allows you to generate HTML reports.
- <code>npm install @wdio/allure-reporter --save-dev
npm install allure-commandline --save-dev</code>

### Configure Allure Reporter in wdio.conf.js

Open your wdio.conf.js file and add @wdio/allure-reporter to the reporters array. You can also specify additional options to customize the report.
<code>
export const config = {
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',   
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]],};</code>

### Step 7: Run Your Tests

Run your WebdriverIO tests (making sure appium server is running)
<code>npx wdio run ./wdio.conf.js</code>
This will generate Allure result files in the allure-results directory specified in your config.

### Step 8: Generate and View Allure Report
After running your tests, use the allure generate command to generate an HTML report:
- <code>npx allure generate allure-results --clean -o allure-report</code>

This command will generate the Allure report in an allure-report folder. To open the report, run:
- <code>npx allure open allure-report</code>
This should open the Allure report in your default browser.

<!-- Design Pattern -->
### Design Pattern
This project is build based on the **Page Object Model** in its equivalent in APIs, please follow this design pattern
in adding new resources or test cases.

For More info about page object design pattern please read [POM](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/)

