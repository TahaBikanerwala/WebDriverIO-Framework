import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page'
import MePlusPage from '../pageobjects/meplus';
import SignUpForm from '../pageobjects/signup.form';
// import SecurePage from '../pageobjects/secure.page';

// const pages = {
//     login: LoginPage
// }
const loginPage = new LoginPage()
const mePlusPage = new MePlusPage()
const signupForm = new SignUpForm()

Given(/^I am on the login page/, async() => {
    // await loginPage.login("tahabikanerwala@gmail.com","foobarbazz")
    await loginPage.goToSignup();
    await mePlusPage.meOption.click();
    await signupForm.typeFirstName();
    await signupForm.typeLastName();
    await signupForm.selectDOB();
    await signupForm.typeEmail();
    await signupForm.clickTermsCheckbox();

    
    
    
});

When(/^I login with username and password/, async() => {
    console.log("Working?") 
});

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

