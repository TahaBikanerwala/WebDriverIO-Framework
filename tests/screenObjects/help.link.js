
const HELP_LINK = "//android.widget.Button[@content-desc='Help']"
class HelpLink{

    get helpLink() {
        return $(HELP_LINK);
    }
}

export default HelpLink