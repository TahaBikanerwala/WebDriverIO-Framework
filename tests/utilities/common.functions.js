class CommonFunctions{

    async enterText(element,data){
        await element.click()
        // await browser.pause(2000)
        await element.setValue("");
        await element.setValue(data);
        await browser.hideKeyboard();
    }

    async scrollByAccessibilityId(locator){
       await driver.execute("mobile: scroll", {  strategy: 'accessibility id', selector : locator, direction: 'down'})
    }

    async scrollByXpath(locator){
        await browser.execute("mobile: scroll", { strategy: 'xpath', selector : locator})
    }
    async scroll(locator){
        await browser.pause(3000)
        while(await locator.isDisplayed() == false){
            await browser.touchAction([{action:'press', x:700 , y: 1800},{action: 'wait', ms: 3000},{action: 'moveTo', x: 700, y: 1000},'release'])
        }
        await browser.pause(3000)
    }

    async enterDOB(dob){
        //empty for now since multiple elements needs to be passed.
    }
}
 
export default CommonFunctions