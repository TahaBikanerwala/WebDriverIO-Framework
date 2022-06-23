class CommonFunctions{

    async input_elements(element,data){
        await element.click();
        await element.setValue("");
        await element.setValue(data)
        await browser.hideKeyboard();
    }
}

export default CommonFunctions