
class LandingPage {
    //First page that the app land on
    /**
     * define selectors using getter methods
     */
    get optionsMenu() {
        return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView');
    }
    

    get loginOption() {
        return $('//android.widget.TextView[@text="Log In"]'); // Replace with your actual selector
    }

    //method for clicking on side menu element
    async clickOnSideMenu() {
        await this.optionsMenu.click();
    }
    //method for clicking on the login option on the side menu
    async clickOnLoginOption() {
        await this.loginOption.click();
    }
     
    }
      
      module.exports = new LandingPage();