
const FIRST_NAME = "//android.widget.EditText[@text='First Name']"
const LAST_NAME = "//android.widget.EditText[@text='Last Name']"
const EMAIL_FIELD = "//android.widget.EditText[@text='youremail@organization.com']"
const DOB_FIELD = "~Date of Birth"
const SELECT_YEAR = "~Select year"
const DOB_SWITCH_TO_INPUT = "~Switch to input"
const DOB_INPUT = "//android.widget.EditText[@index=1]"
const DOB_OK = "~Ok"
const DOB_CANCEL = "~Cancel"
const TERMS_CHECKBOX = "//android.widget.CheckBox[@index=11]"
const NEXT_BUTTON = "~Next"
const TITLE = "~Join Spring Health"

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
        return $(TITLE)
    }

    async typeFirstName(){
        await this.firstName.click()
        await this.firstName.setValue("Taha")
        await browser.hideKeyboard();
    }

    async typeLastName(){
        await this.lastName.click()
        await this.lastName.setValue("Bikanerwala")
        await browser.hideKeyboard();
    }

    async typeEmail(){
        await this.emailField.click()
        await this.emailField.setValue("Bikanerwala@taha.com")
        await browser.hideKeyboard();
    }

    async selectDOB(){
        await this.dobField.click()
        await this.dobSwitchInput.click()
        await this.dobInput.setValue("2/3/1980")
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
