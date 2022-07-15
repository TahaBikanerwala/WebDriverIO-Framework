import $ from "webdriverio/build/commands/browser/$"
import CommonFunctions from "../utilities/common.functions"
import appTabs from "./app.tabs"
import FooterNav from "./app.tabs"

const HOMESCREEN_HEADING = "~Home"
const UPCOMING_APPTS_TXT = "~Upcoming Appointments"
const RECENT_APPTS_TXT = "~Recent Appointments"
const SCHEDULE_THERAPY_BTN = "~Schedule a therapy visit"
const TODO_TXT = "~Tasks to do"
const SIGNUP_CARD = "//android.widget.Button[@content-desc='Get the right care for your family Sign-up your children and add other dependents']"
const PREVISIT_FORM_CARD="~Complete Pre-Visit Form Before you see a provider, provide information to save you time during your visit"
const ASSESSMENT_CARD = "~Complete Conditions Screening Please continue your assessment."
const PROGRESS_CARD = "~Measure Your Progress You are overdue for a short Progress Check-in"
const SCROLL_VIEW = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]"

const commonFunctions = new CommonFunctions();
const footerNav = new FooterNav();


class HomeScreen extends appTabs{
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
    get scrollArea(){
        return $(SCROLL_VIEW)
    }

    async goToBrowseTherapistScreen(){
        //await browser.pause(3000)
        await browser.touchAction([ {action: 'longPress', x: 794, y:1351 }, { action: 'wait', ms: 1000 }, { action: 'moveTo', x: 799, y: 1114}, 'release' ]);
        //await browser.pause(3000)
       // await commonFunctions.scrollByAccessibilityId(ASSESSMENT_CARD)
        //await this.assessmentCard.click()
    }

}

export default new HomeScreen();
                                            