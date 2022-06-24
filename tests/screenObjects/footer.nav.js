import BottomScreen from "./bottom.screen"

const HOME_NAV = "~Home Tab 1 of 5"
const CARE_NAV = "~Your Care Tab 2 of 5"
const JOURNEY_NAV = "~Journey Tab 3 of 5"
const MOMENTS_NAV = "~Moments Tab 4 of 5"
const ACCOUNT_NAV = "~Account Tab 5 of 5"

class FooterNav extends BottomScreen{
    get homeNav(){
        return $(HOME_NAV)
    }

    get careNav(){
        return $(CARE_NAV)
    }

    get journeyNav(){
        return $(JOURNEY_NAV)
    }

    get momentsNav(){
        return $(MOMENTS_NAV)
    }

    get accountNav(){
        return $(ACCOUNT_NAV)
    }
}

export default FooterNav