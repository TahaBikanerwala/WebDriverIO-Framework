import FooterNav from "./footer.nav"

const CARE_HEADING = "~Care"
const SCHEDULE_THERAPY_BTN = "~Schedule a therapy visit"
const foooterNav = new FooterNav()
class HomeScreen extends FooterNav{
    get careHeading(){
        return $(CARE_HEADING)
    }

    get scheduleTherapyBtn(){
        return $(SCHEDULE_THERAPY_BTN)
    }

}

export default HomeScreen;