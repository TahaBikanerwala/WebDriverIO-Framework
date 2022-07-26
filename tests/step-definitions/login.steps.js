import { Given, When, Then} from '@wdio/cucumber-framework';
import homeScreen from '../screenObjects/home.screen';
import loginScreen from '../screenObjects/login.screen';
import cucumberJson from 'wdio-cucumberjs-json-reporter';
import saveScreenshot from "webdriverio/build/commands/browser/saveScreenshot"
import multipleHtmlReporter from "multiple-cucumber-html-reporter"
const TimelineReporter = require('wdio-timeline-reporter').default;



Given(/^Member is on the login screen$/, async() => {
    await expect(loginScreen.signUpLink).toBeDisplayed()
    TimelineReporter.addContext('This test might be flaky');
});

When(/^Member submits invalid username and password$/, async() => 
{   
    await browser.pause(5000)
    // await loginScreen.login("Some Email ID","Some Password")
    
});

Then(/^An error message is displayed to member$/, async()=>{
    // await expect(loginScreen.invalidCrendentialsErrorMessage).toBeDisplayed()
})

When(/^Member submits valid username and password$/, async() => {
    await loginScreen.login("7117+ervin@gmail.com","foobarbazz")
    // await expect(loginScreen.invalidCrendentialsErrorMessage).not.toBeDisplayed()
});

Then(/^Member disables biometrics$/, async()=>{
    await expect(loginScreen.dontEnableBiometrics).toBeDisplayed()
    await loginScreen.dontEnableBiometrics.click(); 
})

Then(/^Member is navigated to Home screen$/, async()=>{
    await browser.pause(3000)
    await expect(homeScreen.homeScreenHeading).toBeDisplayed()
    await homeScreen.completeProgressCheckIn()
})

