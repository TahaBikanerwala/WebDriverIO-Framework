import { Given, Then, When } from "@wdio/cucumber-framework";
import loginScreen from "../screenObjects/login.screen";
import meOrMePlusChildScreen from "../screenObjects/who_is_signing_up.screen2"
import signUpScreen from "../screenObjects/signup.screen";
import whoIsSigningUp from "../screenObjects/who_is_signing_up.screen"
import signUpScreen2 from "../screenObjects/signup.screen2"

Given(/^User does not have Spring Health account$/,async()=>{

})

Given(/^Is offered Spring Health by Organization$/,async()=>{

})

When(/^User takes manual verification successfully$/,async()=>{

})

When(/^completes it successfully$/,async()=>{
    
})

Then(/^User is asked wether He wants to create account for himself or for himself and his child$/,async()=>{
    await browser.pause(10000)
    await loginScreen.goToSignup()
    
})

When(/^User selects to signup only for himself$/,async()=>{
    
    await whoIsSigningUp.signUpAsMe()
})

Then(/^User is navigated to create account screen$/,async()=>{
    //await expect(signUpScreen.screenHeading).toEqual("Let’s find your benefits.")
})

Then(/^User fills form with valid data$/,async()=>{
    await signUpScreen.typeFirstName("Demo")
    await signUpScreen.typeLastName("Automation Test")
    await signUpScreen.selectDOB("2/3/1980")
    await signUpScreen.typeEmail("Covered_life_with_dependent+9fe256fa-c163-4214-b1ba-6679911a13a9@springhealth.com")
    await signUpScreen.clickTermsCheckbox()
    await signUpScreen.clickNext()
    await meOrMePlusChildScreen.createAccountForMe()

    await signUpScreen2.enterPhoneNumber("8888888811")
    await signUpScreen2.enterAddress("data","123","New York, NY, USA","100001")
    await signUpScreen2.selectDOB("2/3/1980")
    await signUpScreen2.enterEmail("Covered_life_with_dependent+9fe256fa-c163-4214-b1ba-6679911a13a9@springhealth.com")
    await signUpScreen2.setPassword()
    
    

})

Then(/^accepts informed consent, Spring health terms and condition and HIPPA policies$/,async()=>{
    await signUpScreen2.clickCheckboxes()
    
})

Then(/^submits form$/,async()=>{
    await signUpScreen2.clickNext()
})

Then(/^User is asked to verify his mail$/,async()=>{
    
})

When(/^email verification is done$/,async()=>{
    
})



Then(/^User navigated to Personalize you details screen$/,async()=>{
    
})

 