class CommonFunctions{

    async enterText(element,data){
        await element.click()
        await browser.pause(2000)
        await element.setValue("");
        await element.setValue(data);
        await browser.hideKeyboard();
    }

    async scrollByAccessibilityId(locator){
        await browser.execute("mobile: scroll", { strategy: 'accessibility id', selector : locator})
    }

    async scrollByXpath(locator){
        await browser.execute("mobile: scroll", { strategy: 'xpath', selector : locator})
    }
}
 
export default CommonFunctions