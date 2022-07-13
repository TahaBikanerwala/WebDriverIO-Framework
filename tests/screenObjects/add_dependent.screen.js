
const ADULT = '~Adult dependent (18+ years old) Invite your adult dependent. They will receive an invitation email from Spring Health and can create their own account and manage their own care.'
const CHILD = '~Child or teen (6 - 17 years old) Add your child or teen to your account to manage their care for them.'
class AddDependent{
    get adultTab(){
        return $(ADULT)
    }

    get childTab(){
        return $(CHILD)
    }
}

export default new AddDependent();