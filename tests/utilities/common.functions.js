class CommonFunctions{

    async enterText(element,data){
        await element.toBeclickable();
        await element.click();
        await element.setValue("");
        await element.setValue(data);
        await browser.hideKeyboard();
    }
}

export default CommonFunctions