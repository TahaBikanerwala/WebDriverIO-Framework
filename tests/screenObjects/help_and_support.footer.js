import HelpLink from "./help.link"

const WHATS_AVAILABLE_BTN = "~What's available to me?"
const HELPLINE_BTN = "~For questions about care or technical issues, call +1 (855) 629-0554. 8am - 8pm ET Monday - Friday"

class HelpAndSupportFooter {
    get whatsAvailableBtn(){
        return $(WHATS_AVAILABLE_BTN)
    }

    get helplineBtn(){
        return $(HELPLINE_BTN)
    }

}

export default HelpAndSupportFooter