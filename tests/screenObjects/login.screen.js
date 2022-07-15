import WebDriver from "@wdio/utils/build/monad"
import CommonFunctions from "../utilities/common.functions"
import HelpLink from "./help.link"

/**
 * sub page containing specific selectors and methods for a specific page
 */
const LOGIN_BUTTON = "//android.widget.Button[@content-desc='Sign in']"
const USER_NAME = "//android.widget.EditText[@index=0]"
const PASSWORD_FIELD = "//android.widget.EditText[@index=4]"
const NO_BTN = "~No"
const YES_BTN = "~Enable"
const SIGNUP_BTN = "~Sign Up"
const FRGT_PASS = "~Forgot Password?"
const ERROR_BANNER = "~The user credentials were incorrect."
const TITLE_TEXT = "//android.view.View[@content-desc='Sign in']"
const PASSWORD_TOGGLE = "~Show password, Toggle"
const commonFunctions = new CommonFunctions();


class LoginScreen {
    /**
     * define selectors using getter methods
     */


    get usernameTextfield() {

        return $(USER_NAME)
    }

    get passwordTextfield() {

        return $(PASSWORD_FIELD)
    }

    get submitButton() {

        return $(LOGIN_BUTTON);
    }

    get dontEnableBiometrics() {

        return $(NO_BTN);
    }

    get signUpLink() {
        return $(SIGNUP_BTN);
    }

    get forgotPasswordLink() {
        return $(FRGT_PASS);
    }

    get invalidCrendentialsErrorMessage(){
        return $(ERROR_BANNER)
    }

    get signInHeading(){
        return $(TITLE_TEXT)
    }

    get togglePassword(){
        return $(PASSWORD_TOGGLE)
    }

    get enableBiometricsButton(){
        return $(YES_BTN)
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async login(username, password) {
        await commonFunctions.enterText(this.usernameTextfield,username)
        await commonFunctions.enterText(this.passwordTextfield,password)
        await this.submitButton.click();}   

    async goToSignup() {
        await this.signUpLink.click();
    }

}

export default new LoginScreen();
