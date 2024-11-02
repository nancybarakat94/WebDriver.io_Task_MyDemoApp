const { $ } = require('@wdio/globals')


class LoginPage {
    /**
     * define selectors and error messages using variables
     */
      //page element locators
      $loginPageTitle= $('(//android.widget.TextView[@text="Login"])[1]');
      $usernameField=$('//android.widget.EditText[@content-desc="Username input field"]');
      $passwordField=$('//android.widget.EditText[@content-desc="Password input field"]');
      $loginButton=$('//android.view.ViewGroup[@content-desc="Login button"]');
      $prodcutsTitle=$('//android.widget.TextView[@text="Products"]');
      
      //messages locators
      $lockedMessage =$('//android.widget.TextView[@text="Sorry, this user has been locked out."]');
      $noMatchMessage=$('//android.widget.TextView[@text="Provided credentials do not match any user in this service."]');
      $usernameEmptyError=$('//android.widget.TextView[@text="Username is required"]');
      $passwordEmptyError=$('//android.widget.TextView[@text="Password is required"]');
     
       
       //method for inputting credentials and clicking on login button
        async login(username, password) {
          await this.$usernameField.setValue(username);
          await this.$passwordField.setValue(password);
          await this.$loginButton.click();
        }

    }
      
      module.exports = new LoginPage();
