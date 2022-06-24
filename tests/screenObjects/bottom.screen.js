import HeaderNav from "./header.nav"

const WHATS_AVAILABLE_BTN = "~What's available to me?"
const HELPLINE_BTN = "~For questions about care or technical issues, call +1 (855) 629-0554. 8am - 8pm ET Monday - Friday"

class BottomScreen extends HeaderNav{
    get whatsAvailableBtn(){
        return $(WHATS_AVAILABLE_BTN)
    }

    get helplineBtn(){
        return $(HELPLINE_BTN)
    }

}

export default BottomScreen