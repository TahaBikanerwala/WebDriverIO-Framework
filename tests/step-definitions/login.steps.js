import { Given, When, Then } from '@wdio/cucumber-framework';
import homeScreen from '../screenObjects/home.screen';
import loginScreen from '../screenObjects/login.screen';
import mePlusScreen from '../screenObjects/who_is_signing_up.screen';
import signupScreen from '../screenObjects/signup.screen';


Given(/^Member is on the login screen$/, async() => {
    await expect(loginScreen.signUpLink).toBeDisplayed()
});

When(/^Member submits invalid username and password$/, async() => {
    await loginScreen.login("Some Email ID","Some Password")
});

Then(/^An error message is displayed to member$/, async()=>{
    await expect(loginScreen.invalidCrendentialsErrorMessage).toBeDisplayed()
})

When(/^Member submits valid username and password$/, async() => {
    await loginScreen.login("7117+ervin@gmail.com","foobarbazz")
});

Then(/^Member is asked to enable biometrics$/, async()=>{
    await expect(loginScreen.dontEnableBiometrics).toBeDisplayed();
    await loginScreen.dontEnableBiometrics.click();
})


