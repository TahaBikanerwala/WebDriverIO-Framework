
const HELP_BTN = "//android.widget.Button[@content-desc='Help']"
class HeaderNav{

    get heplpBtn() {
        return $(HELP_BTN);
    }
}

export default HeaderNav