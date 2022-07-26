
const CHOOSE_THERAPIST_SCREEN_TITLE = "~Choose a Therapist"
const CHOOSE_THERAPIST_SCREEN_HEADING = "~Schedule therapy"
const FILTER_BUTTON = "//android.widget.Button[@content-desc='Filters:']"

class ChooseTherapist{

    get chooseTherapistScreenTitle(){
        return $(CHOOSE_THERAPIST_SCREEN_TITLE)
    }

    get chooseTherapistScreenHeading(){
        return $(CHOOSE_THERAPIST_SCREEN_HEADING)
    }

    get filterButton(){
        return $(FILTER_BUTTON)
    }

}

export default new ChooseTherapist()