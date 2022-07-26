
const ME_OPTION = "~Sign up as Me I am offered Spring Health by my organization"
const ME_PLUS_OPTION = "~Sign up as Spouse, partner, or dependent I am the spouse or dependent (18+ years old) of someone who is offered Spring Health"


class WhoIsSigningUp{
    get meOption(){
        return $(ME_OPTION);
    }

    get mePlusOption(){
        return $(ME_PLUS_OPTION);
    }


}

export default new WhoIsSigningUp();