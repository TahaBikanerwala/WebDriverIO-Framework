<<<<<<< HEAD

import FooterNav from "./footer.nav"

const CARE_HEADING = "~Care"
const SCHEDULE_THERAPY_BTN = "~Schedule a therapy visit"

class HomeScreen extends FooterNav{
=======

const CARE_HEADING = "~Care"
class HomeScreen{
>>>>>>> main
    get careHeading(){
        return $(CARE_HEADING)
    }

<<<<<<< HEAD
    get scheduleTherapyBtn(){
        $(SCHEDULE_THERAPY_BTN).waitForDisplayed()
        return $(SCHEDULE_THERAPY_BTN)
    }

=======
>>>>>>> main
}

export default new HomeScreen();