
const ME_OPTION = "~Me I'd like to create an account for myself."
const ME_PLUS_OPTION = "~Me + child. I'd like to create an account for someone under 18."

class WhoIsSigningUp{
    get meOption(){
        return $(ME_OPTION);
    }

    get mePlusOption(){
        return $(ME_PLUS_OPTION);
    }


}

export default new WhoIsSigningUp();