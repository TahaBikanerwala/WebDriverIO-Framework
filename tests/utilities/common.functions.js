class CommonUtilities{
     async type_in_element(element,data){
        await element.click();
        await element.setValue("");
        await element.setValue(data)
        await browser.hideKeyboard();
    }
}

export default CommonUtilities;