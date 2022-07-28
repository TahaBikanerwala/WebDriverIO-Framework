

const ME_OPTION = "~Sign up as\nMe\nI am offered Spring Health by my organization"
const ME_PLUS_OPTION = "~Sign up as\nSpouse, partner, or dependent\nI am the spouse or dependent (18+ years old) of someone who is offered Spring Health"
const HELP_BUTTON = "~Help"
const TEXT="~Your information is private and never shared without your permission."



class WhoIsSigningUp{
    get meOption(){
        return $(ME_OPTION);
    }

    get dependentOption(){
        return $(ME_PLUS_OPTION);
    }
    get helpButton(){
        return $(HELP_BUTTON)
    }
    get text(){
        return $(TEXT)
    }

    async signUpAsMe(){
        await browser.pause(5000)
       // This works ->  await this.helpButton.click()
        const result = await this.meOption.isDisplayed()
        console.log(await result)
        await this.meOption.click()
        await browser.pause(5000)
        
    }

    async signUpAsDependent(){
        await browser.pause(3000)
        await this.mePlusOption.click()
    }


}

export default new WhoIsSigningUp();