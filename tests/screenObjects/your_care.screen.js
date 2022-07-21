import appTabs from "./app.tabs"

const YOUR_CARE_SCREEN_TITLE = "~Your Care"
const YOUR_CARE_SCREEN_HEADING = "~Your Care Team"
const CARE_NAVIGATOR_CARD = "~Care Navigator"
const THERAPIST_CARD = "~Therapist"
const UPCOMING_APPTS_HEADING = "~Upcoming Appointments"
const RECENT_APPTS_HEADING = "~Recent Appointments"

class YourCareScreen extends appTabs{

    get yourCareScreenTitle(){
        return $(YOUR_CARE_SCREEN_TITLE)
    }

    get yourCareScreenHeading(){
        return $(YOUR_CARE_SCREEN_HEADING)
    }

    get careNavigatorCard(){
        return $(CARE_NAVIGATOR_CARD)
    }

    get therapistCard(){
        return $(THERAPIST_CARD)
    }

    get upcomingApptsHeading(){
        return $(UPCOMING_APPTS_HEADING)
    }

    get recentApptsHeading(){
        return $(RECENT_APPTS_HEADING)
    }


}

export default new YourCareScreen()