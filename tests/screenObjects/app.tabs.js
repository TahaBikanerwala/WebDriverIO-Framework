import HelpAndSupportFooter from "./help_and_support.footer"
import BottomScreen from "./help_and_support.footer"

const HOME_NAV = "~Home Tab 1 of 5"
const CARE_NAV = "~Your Care Tab 2 of 5"
const JOURNEY_NAV = "~Journey Tab 3 of 5"
const MOMENTS_NAV = "~Moments Tab 4 of 5"
const ACCOUNT_NAV = "~Account Tab 5 of 5"

class appTabs extends HelpAndSupportFooter{
    get homeTab(){
        return $(HOME_NAV)
    }

    get yourCareTab(){
        return $(CARE_NAV)
    }

    get journeyTab(){
        return $(JOURNEY_NAV)
    }

    get momentsTab(){
        return $(MOMENTS_NAV)
    }

    get accountTab(){
        return $(ACCOUNT_NAV)
    }
}

export default appTabs