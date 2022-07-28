import CommonFunctions from "../utilities/common.functions"

const FIRST_NAME = "//android.widget.EditText[@text='First Name']"
const LAST_NAME = "//android.widget.EditText[@text='Last Name']"
const PHONE_NUMBER_DROP_DOWN = "~Phone number country code.. United States. Plus 1"
const PHONE_NUBER_EDITBOX = "//android.widget.EditText[@text='Phone Number']"
const STREET_ADDRESS_EDITBOX = "//android.widget.EditText[@text='Enter address']"
const APT_SUITE_EDITBOX = "//android.widget.EditText[@text='Enter apartment / suite']"
const CITY_DROPDOWN = "//android.widget.EditText[@text='Enter city']"
const POSTAL_CODE_EDITBOX = "//android.widget.EditText[@text='Enter ZIP / postal code']"
const CHOOSE_PASSWORD = "//android.widget.EditText[@text='Choose your password *']"
const CONFIRM_PASSWORD = "//android.widget.EditText[@text='Confirm your password *']"
const EMAIL_FIELD = "//android.widget.EditText[@text='Enter email address']"
const DOB_FIELD = "~Date of Birth"
const SELECT_YEAR = "~Select year"
const DOB_SWITCH_TO_INPUT = "~Switch to input"
const DOB_INPUT = "//android.widget.EditText[@index=1]"
const DOB_OK = "~Ok"
const DOB_CANCEL = "~Cancel"
const HIPAA_CHECKBOX = "~I agree to Spring's Terms of Service, Privacy Policy and HIPAA Privacy Notice."
const TERMS_CHECKBOX = "~I agree to Spring's Informed Consent policy"
const NEXT_BUTTON = "~Next"
const SIGNUP2_SCREEN_TITLE = "~Join Spring Health"
const SIGNUP2_SCREEN_HEADING = "~Your Account"

const commonFunctions = new CommonFunctions()

class SignUpSreen2{

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

    get phoneNumberDropdown(){
        return $(PHONE_NUMBER_DROP_DOWN)
    }

    get phoneNumberEditBox(){
        return $(PHONE_NUBER_EDITBOX)
    }

    get streetAddressEditBox(){
        return $(STREET_ADDRESS_EDITBOX)
    }

    get aptSuiteEditBox(){
        return $(APT_SUITE_EDITBOX)
    }

    get cityDropdown(){
        return $(CITY_DROPDOWN)
    }

    get postalCodeEditBox(){
        return $(POSTAL_CODE_EDITBOX)
    }

    get choosePassword(){
        return $(CHOOSE_PASSWORD)
    }

    get confirmPassword(){
        return $(CONFIRM_PASSWORD)
    }

    get termsCheckbox(){
        return $(TERMS_CHECKBOX)
    }

    get hipaaCheckbox(){
        return $(HIPAA_CHECKBOX)
    }

    get nextBtn(){
        return $(NEXT_BUTTON)
    }

    get screenTitle(){
        return $(SIGNUP2_SCREEN_TITLE)
    }

    get screenHeading(){
        return $(SIGNUP2_SCREEN_HEADING)
    }

    async enterFirstName(name){
        await this.firstName.click()
        await this.firstName.setValue(name)
        await browser.hideKeyboard();
    }

    async enterLastName(lastname){
        await this.lastName.click()
        await this.lastName.setValue(lastname)
        await browser.hideKeyboard();
    }

    async enterEmail(email){
        // await this.emailField.click()
        // await this.emailField.setValue(email)
        // await browser.hideKeyboard();

        await commonFunctions.enterText(this.emailField, email)

    }

    async selectDOB(dob){
        await this.dobField.click()
        await this.dobSwitchInput.click()
        await this.dobInput.setValue(dob)
        await this.dobOk.click()
    }

    async enterPhoneNumber(number){
        
        await browser.hideKeyboard()
        await commonFunctions.scroll(this.phoneNumberEditBox)
        await browser.hideKeyboard()
        await commonFunctions.enterText(this.phoneNumberEditBox, number)
    }

    async enterAddress(street,apt, city, postalcode){
    
        await commonFunctions.enterText(this.streetAddressEditBox, street)
        await commonFunctions.enterText(this.aptSuiteEditBox, apt)
        await commonFunctions.enterText(this.cityDropdown, city)
        await commonFunctions.enterText(this.postalCodeEditBox, postalcode)
    }

    async setPassword(){
    
        await commonFunctions.enterText(this.choosePassword, "foobarbazz")
        await commonFunctions.enterText(this.confirmPassword, "foobarbazz")

    }

    async clickCheckboxes(){
        await this.hipaaCheckbox.click()
        await this.termsCheckbox.click()
    }

    async clickNext(){
        await commonFunctions.scroll(this.nextBtn)
        await this.nextBtn.click()
    }
  

}

export default new SignUpSreen2();
