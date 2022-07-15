import touchAction from "webdriverio/build/commands/browser/touchAction"
import CommonFunctions from "../utilities/common.functions"
import appTabs from "./app.tabs"
import FooterNav from "./app.tabs"
import saveScreenshot from "webdriverio/build/commands/browser/saveScreenshot"

const HOMESCREEN_HEADING = "~Home"
const UPCOMING_APPTS_TXT = "~Upcoming Appointments"
const RECENT_APPTS_TXT = "~Recent Appointments"
const SCHEDULE_THERAPY_BTN = "~Schedule a therapy visit"
const TODO_TXT = "~Tasks to do"
// const SIGNUP_CARD = "~Get the right care for your family Sign-up your children and add other dependents"
const SIGNUP_CARD = "android.widget.Button[@content-desc='Get the right care for your family Sign-up your children and add other dependents']"
const PREVISIT_FORM_CARD="~Complete Pre-Visit Form Before you see a provider, provide information to save you time during your visit"
const ASSESSMENT_CARD = "~Complete Conditions Screening Please continue your assessment."
const PROGRESS_CARD = "~Measure Your Progress You are overdue for a short Progress Check-in"

const commonFunctions = new CommonFunctions();


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

    async goToBrowseTherapistScreen(){
        // await commonFunctions.scrollByAccessibilityId(SCHEDULE_THERAPY_BTN)
        await this.progressCard.scrollIntoView()
        // await browser.scroll(0,2000).end()
        // await browser.moveTo(SIGNUP_CARD);
        // browser.touchPerform(RECENT_APPTS_TXT,0,2000);
        // await browser.touchPerform([
        //     {
        //     action: 'press',
        //     options: {
        //         x: 736,
        //         y: 800
        //     }
        //     },
        //     {
        //         action: 'moveTo',
        //         options: {
        //             x: 736,
        //             y: 1133
        //         }
        //     },
        //     {
        //         action: 'release'
        //     }
        // ]);
        // await browser.touchAction({
        //     action: 'tap',
        //     x: 736,
        //     y:1133,
        //     element: SIGNUP_CARD
        // })
        // await this.scheduleTherapyBtn.click()
        // await touchAction().press(RECENT_APPTS_TXT).moveTo(SIGNUP_CARD).release()
        // await browser.swipeUp(HOMESCREEN_HEADING,900,1);
        // await browser.touchScroll(1,900);
        // await browser.execute(SIGNUP_CARD => SIGNUP_CARD.scrollIntoView(), browser.element('accessibility id').value);
        // await browser.pause(5000)
       
        
        
        // await browser.execute("mobile: scroll", { strategy: 'accessibility id', selector : ASSESSMENT_CARD, direction: 'down'})
        // await this.signUpCard.click()
    }

}

export default new HomeScreen();