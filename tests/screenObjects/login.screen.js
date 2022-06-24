import CommonFunctions from "../utilities/common.functions"
import HeaderNav from "./header.nav"

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
const headerNav = new HeaderNav();


class LoginScreen {
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

    get frgtPassBtn() {
        return $(FRGT_PASS);
    }

    get errorBanner(){
        return $(ERROR_BANNER)
    }

    get titleTxt(){
        return $(TITLE_TEXT)
    }

    get togglePassword(){
        return $(PASSWORD_TOGGLE)
    }

    get yesBtn(){
        return $(YES_BTN)
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async login(username, password) {
        await commonFunctions.input_elements(this.inputUsername,username)
        await commonFunctions.input_elements(this.inputPassword,password)
        await this.btnSubmit.click();
    }

    async goToSignup() {
        await this.signUpBtn.click();
    }

}

export default new LoginScreen();
