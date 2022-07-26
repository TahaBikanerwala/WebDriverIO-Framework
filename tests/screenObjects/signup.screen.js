
const FIRST_NAME = "//android.widget.EditText[@text='First Name']"
const LAST_NAME = "//android.widget.EditText[@text='Last Name']"
const EMAIL_FIELD = "//android.widget.EditText[@text='youremail@organization.com']"
const DOB_FIELD = "~Date of Birth"
const SELECT_YEAR = "~Select year"
const DOB_SWITCH_TO_INPUT = "~Switch to input"
const DOB_INPUT = "//android.widget.EditText[@index=1]"
const DOB_OK = "~Ok"
const DOB_CANCEL = "~Cancel"
const TERMS_CHECKBOX = "I have read and understood Spring Health's Electronic Communication Agreement"
const NEXT_BUTTON = "~Next"
const SIGNUP_SCREEN_TITLE = "~Join Spring Health"
const SIGNUP_SCREEN_HEADING = "~Let’s find your benefits."

class SignUpSreen{

    get firstName(){
        
        return $(FIRST_NAME)
    }

    get lastName(){
        return $(LAST_NAME)
    }

    get emailField(){
        return $(EMAIL_FIELD)
    }

    get dobField(){
        return $(DOB_FIELD)
    }

    get selectYear(){
        return $(SELECT_YEAR)
    }

    get dobSwitchInput(){
        return $(DOB_SWITCH_TO_INPUT)
    }

    get dobInput(){
        return $(DOB_INPUT)
    }

    get dobOk(){
        return $(DOB_OK)
    }

    get dobCancel(){
        return $(DOB_CANCEL)
    }

    get termsCheckbox(){
        return $(TERMS_CHECKBOX)
    }

    get nextBtn(){
        return $(NEXT_BUTTON)
    }

    get screenTitle(){
        return $(SIGNUP_SCREEN_TITLE)
    }

    get screenHeading(){
        return $(SIGNUP_SCREEN_HEADING)
    }

    async typeFirstName(name){
        await this.firstName.click()
        await this.firstName.setValue(name)
        await browser.hideKeyboard();
    }

    async typeLastName(lastname){
        await this.lastName.click()
        await this.lastName.setValue(lastname)
        await browser.hideKeyboard();
    }

    async typeEmail(email){
        await this.emailField.click()
        await this.emailField.setValue(email)
        await browser.hideKeyboard();
    }

    async selectDOB(dob){
        await this.dobField.click()
        await this.dobSwitchInput.click()
        await browser.hideKeyboard()
        await this.dobInput.setValue(dob)
        await this.dobOk.click()
    }

    async clickTermsCheckbox(){
        await this.termsCheckbox.click()
    }

    async clickNext(){
        await this.nextBtn.click()
    }
  

}

export default new SignUpSreen();
