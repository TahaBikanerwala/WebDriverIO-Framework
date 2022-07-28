import CommonFunctions from "../utilities/common.functions"
const FIRST_NAME = "//android.widget.EditText[@text='First Name']"
const LAST_NAME = "//android.widget.EditText[@text='Last Name']"
const EMAIL_FIELD = "//android.widget.EditText[@text='youremail@organization.com']"
const DOB_FIELD = "~Date of Birth"
const SELECT_YEAR = "~Select year"
const DOB_SWITCH_TO_INPUT = "~Switch to input"
const DOB_INPUT = "//android.widget.EditText[@index=1]"
const DOB_OK = "~Ok"
const DOB_CANCEL = "~Cancel"
const TERMS_CHECKBOX = "~I have read and understood Spring Health's Electronic Communication Agreement"
const NEXT_BUTTON = "~Next"
const SIGNUP_SCREEN_TITLE = "~Join Spring Health"
const SIGNUP_SCREEN_HEADING = "~Let’s find your benefits."

const commonFunctions = new CommonFunctions()

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
        await commonFunctions.enterText(this.firstName, name)
    }

    async typeLastName(lastname){
        await commonFunctions.enterText(this.lastName, lastname)
    }

    async typeEmail(email){
        await commonFunctions.enterText(this.emailField, email)
    }

    async selectDOB(dob){
        await commonFunctions.enterDOB(this.dobField, this.dobSwitchInput, this.dobInput, this.dobOk, dob)
    }

    async clickTermsCheckbox(){
        await this.termsCheckbox.click()
    }

    async clickNext(){
        await commonFunctions.scroll(this.nextBtn)
        await this.nextBtn.click()
    }
  

}

export default new SignUpSreen();
