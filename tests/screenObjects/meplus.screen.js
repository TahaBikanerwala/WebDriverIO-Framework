
const ME_OPTION = "~Sign up as primary recipient"
const ME_PLUS_OPTION = "~Sign up as spouse, partner, or dependent"


class MePlusScreen{
    get meOption(){
        return $(ME_OPTION);
    }

    get mePlusOption(){
        return $(ME_PLUS_OPTION);
    }


}

export default MePlusScreen;