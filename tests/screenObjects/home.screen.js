import FooterNav from "./footer.nav"

const CARE_HEADING = "~Care"
const SCHEDULE_THERAPY_BTN = "~Schedule a therapy visit"

class HomeScreen extends FooterNav{
    get careHeading(){
        return $(CARE_HEADING)
    }

    get scheduleTherapyBtn(){
        $(SCHEDULE_THERAPY_BTN).waitForDisplayed()
        return $(SCHEDULE_THERAPY_BTN)
    }

}

export default new HomeScreen();