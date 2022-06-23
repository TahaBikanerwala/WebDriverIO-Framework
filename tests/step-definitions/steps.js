import { Given, When, Then } from '@wdio/cucumber-framework';
import loginScreen from '../screenObjects/login.screen';
import mePlusScreen from '../screenObjects/meplus.screen';
import signupScreen from '../screenObjects/signup.screen';
import homeScreen from '../screenObjects/home.screen';

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
    await loginScreen.login("Some Email","Some Password")
});

Then(/^The member should get an error message displayed$/, async()=>{
    await expect(loginScreen.errorBanner).toBeDisplayed()
    await expect(loginScreen.errorBanner).toHaveAttrContaining("content-desc","The user credentials were incorrect.")
})

When(/^The member logs in with corrrect username and password$/, async() => {
    await loginScreen.login("Rjohal+5@springhealt.com","foobarbazz")
});

Then(/^The member should be able to reach the Home Page of the app$/, async()=>{
    await loginScreen.btnNo.click();
    // await homeScreen.journeyNav.click();
})


