import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../screenObjects/login.screen'
import MePlusPage from '../screenObjects/meplus.screen';
import SignUpForm from '../screenObjects/signup.screen';

// const pages = {
//     login: LoginPage
// }
const loginPage = new LoginPage()
const mePlusPage = new MePlusPage()
const signupForm = new SignUpForm()

Given(/^Member is on the login page$/, async() => {
    
    // await loginPage.goToSignup();
    // await mePlusPage.meOption.click();
    // await signupForm.typeFirstName();
    // let title = await signupForm.screenTitle
     //Check which screen is loaded
    // await expect(title).toHaveAttrContaining("content-desc","Join Spring Health")
    
    // await signupForm.typeLastName();
    // await signupForm.selectDOB();
    // await signupForm.typeEmail();
    // await signupForm.clickTermsCheckbox();
    // await signupForm.clickNext();
    
});

When(/^The member logs in with incorrrect username and password$/, async() => {
    await loginPage.login("Some Email","Some Password")
});

Then(/^The member should get an error message displayed$/, async()=>{
    await expect(loginPage.errorBanner).toBeDisplayed()
    await expect(loginPage.errorBanner).toHaveAttrContaining("content-desc","The user credentials were incorrect.")
})

When(/^The member logs in with corrrect username and password$/, async() => {
    await loginPage.login("tahabikanerwala@gmail.com","foobarbazz")
});

Then(/^The member should be able to reach the Home Page of the app$/, async()=>{
    await loginPage.btnNo.click();
})

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

