import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginScreen from '../screenObjects/login.screen'
import MePlusPage from '../screenObjects/meplus.screen';
import SignUpForm from '../screenObjects/signup.screen';

// const pages = {
//     login: LoginPage
// }
const loginScreen = new LoginScreen()
const mePlusPage = new MePlusPage()
const signupForm = new SignUpForm()

Given(/^Member is on the login screen$/, async() => {
    await expect(loginScreen.signUpBtn).toBeDisplayed()

});

When(/^The member logs in with incorrrect username and password$/, async() => {
    await loginScreen.login("Some Email","Some Password")
});

Then(/^The member should get an error message displayed$/, async()=>{
    await expect(loginScreen.errorBanner).toBeDisplayed()
    await expect(loginScreen.errorBanner).toHaveAttrContaining("content-desc","The user credentials were incorrect.")
})

When(/^The member logs in with corrrect username and password$/, async() => {
    await loginScreen.login("Jessicawarm@example.com","foobarbazz")
});

Then(/^The member should be able to reach the Home Page of the app$/, async()=>{
    await loginScreen.btnNo.click();
})

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

