import CommonUtilities from '../utilities/common.functions'
/**
 * sub page containing specific selectors and methods for a specific page
 */
const LOGIN_BUTTON = "//android.widget.Button[@content-desc='Sign in']"
const USER_NAME = "//android.widget.EditText[@index=0]"
const PASSWORD_FIELD = "//android.widget.EditText[@index=1]"
const NO_BTN = "~No"
const SIGNUP_BTN = "~Sign Up"
const HELP_BTN = "~Help"
const FRGT_PASS = "~Forgot Password?"
const ERROR_BANNER = "~The user credentials were incorrect."
const commonUtilities = new CommonUtilities();

class LoginPage {
    /**
     * define selectors using getter methods
     */


    get inputUsername() {

        return $(USER_NAME)
    }

    get inputPassword() {

        return $(PASSWORD_FIELD)
    }

    get btnSubmit() {

        return $(LOGIN_BUTTON);
    }

    get btnNo() {

        return $(NO_BTN);
    }

    get signUpBtn() {
        return $(SIGNUP_BTN);
    }

    get heplpBtn() {
        return $(HELP_BTN);
    }

    get frgtPassBtn() {
        return $(FRGT_PASS);
    }

    get errorBanner(){
        return $(ERROR_BANNER)
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async login(username, password) {
        await commonUtilities.type_in_element(this.inputUsername,username)
        // await this.inputUsername.click();
        // await this.inputUsername.setValue("");
        // await this.inputUsername.setValue(username)
        // await browser.hideKeyboard();
        await commonUtilities.type_in_element(this.inputPassword,password);
        // await this.inputPassword.click();
        // await this.inputPassword.setValue("");
        // await this.inputPassword.setValue(password)
        // await browser.hideKeyboard();
        await this.btnSubmit.click();
    }

    async goToSignup() {
        await this.signUpBtn.click();
    
    }

    async wait_for_screen() {
        await $(USER_NAME).waitForDisplayed({ timeout: 4000 })
        await $(PASSWORD_FIELD).waitForDisplayed({ timeout: 4000 })
        await $(LOGIN_BUTTON).waitForDisplayed({ timeout: 4000 })
        await $(SIGNUP_BTN).waitForDisplayed({ timeout: 4000 })
        await $(HELP_BTN).waitForDisplayed({ timeout: 4000 })
        await $(FRGT_PASS).waitForDisplayed({ timeout: 4000 })
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    // open () {
    //     return super.open('login');
    // }
}

export default LoginPage;
