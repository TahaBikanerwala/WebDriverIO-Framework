import WebDriver from "@wdio/utils/build/monad"
import CommonFunctions from "../utilities/common.functions"
import appTabs from "./app.tabs"
import FooterNav from "./app.tabs"
import saveScreenshot from "webdriverio/build/commands/browser/saveScreenshot"


const HOMESCREEN_HEADING = "~Home"
const UPCOMING_APPTS_TXT = "~Upcoming Appointments"
const RECENT_APPTS_TXT = "~Recent Appointments"
const SCHEDULE_THERAPY_BTN = "~Schedule a therapy visit"
const TODO_TXT = "~Tasks to do"
const SIGNUP_CARD = "(//android.view.View[@content-desc='proceed, button'])[1]"
const PREVISIT_FORM_CARD="(//android.view.View[@content-desc='proceed, button'])[2]"
const ASSESSMENT_CARD = "(//android.view.View[@content-desc='proceed, button'])[3]"
const PROGRESS_CARD = "(//android.view.View[@content-desc='proceed, button'])[4]"

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
    get scrollArea(){
        return $(SCROLL_VIEW)
    }

    get allButtons(){
        return $(BUTTONS)
    }

    async goToBrowseTherapistScreen(){
        await commonFunctions.scroll(this.scheduleTherapyBtn)
        await this.scheduleTherapyBtn.click()
    }

    async completePrevisitForm(){
        await commonFunctions.scroll(this.previsitFormCard)
        await this.previsitFormCard.click()
        await browser.pause(3000)
    }
    async completeAssessment(){
        await commonFunctions.scroll(this.assessmentCard)
        await this.assessmentCard.click()
        await browser.pause(3000)
    }

    async completeProgressCheckIn(){
        await commonFunctions.scroll(this.progressCard)
        await this.progressCard.click()
        await browser.pause(3000)
    }
}

export default new HomeScreen();