
const ME_OPTION = "~Me\nI'd like to create an account for myself."
const ME_PLUS_OPTION = "~Me + child.\nI'd like to create an account for someone under 18."

class MeOrMePlusChildScreen{
    get meOption(){
        return $(ME_OPTION);
    }

    get mePlusOption(){
        return $(ME_PLUS_OPTION);
    }

    async createAccountForMe(){
     
        await this.meOption.click()
    }

    async createAccountForMeAndMyChild(){
        
        await this.mePlusOption.click()
    }



}

export default new MeOrMePlusChildScreen();