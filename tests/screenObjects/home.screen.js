import FooterNav from "./footer.nav"

const HOMESCREEN_HEADING = "~Home"
const UPCOMING_APPTS_TXT = "~Upcoming Appointments"
const RECENT_APPTS_TXT = "~Recent Appointments"
const SCHEDULE_THERAPY_BTN = "~Schedule a therapy visit"
const TODO_TXT = "~Tasks to do"
const SIGNUP_CARD = "~Get the right care for your family Sign-up your children and add other dependents"
const PREVISIT_FORM_CARD="~Complete Pre-Visit Form Before you see a provider, provide information to save you time during your visit"
const ASSESSMENT_CARD = "~Complete Conditions Screening Please continue your assessment."
const PROGRESS_CARD = "~Measure Your Progress You are overdue for a short Progress Check-in"


class HomeScreen extends FooterNav{
    get homeScreenHeading(){
        return $(HOMESCREEN_HEADING)
    }

    get upcomingApptsTxt(){
        return $(UPCOMING_APPTS_TXT)
    }

    get recentApptsTxt(){
        return $(RECENT_APPTS_TXT)
    }

    get scheduleTherapyBtn(){
        return $(SCHEDULE_THERAPY_BTN)
    }

    get todoTxt(){
        return $(TODO_TXT)
    }

    get signUpCard(){
        return $(SIGNUP_CARD)
    }

    get previsitFormCard(){
        return $(PREVISIT_FORM_CARD)
    }

    get assessmentCard(){
        return $(ASSESSMENT_CARD)
    }

    get progressCard(){
        return $(PROGRESS_CARD)
    }


}

export default new HomeScreen();