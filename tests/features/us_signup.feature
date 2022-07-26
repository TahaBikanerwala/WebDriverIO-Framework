Feature: Sign up feature

Create Spring Health member account for user who lives in US

Background:
    Given User does not have Spring Health account 
    And   Is offered Spring Health by Organization 

  Scenario: As a valid  covered life, User wants to create Spring health member account for themselves
    When User takes manual verification successfully
    And  completes it successfully
    Then User is asked wether He wants to create account for himself or for himself and his child
    When User selects to signup only for himself
    Then User is navigated to create account screen
    And  User fills form with valid data
    And  accepts informed consent, Spring health terms and condition and HIPPA policies
    And  submits form 
    Then User is asked to verify his mail
    When email verification is done
    Then User navigated to Personalize you details screen

#  Scenario: As a valid  covered life, User wants to create Spring health member account for themselves and their child
#     When User takes manual verification 
#     And  completes it successfully
#     Then User is asked wether they want to create account for himself or for himself and his child
#     When User selects to sign up for himself and his child
#     Then User is navigated to create guardian account screen
#     And  fills valid guardian details in the form 
#     And  accepts informed consent, Spring health terms and condition and HIPPA policies
#     And  submits form 
#     Then Member verifies his mail
#     And  Is navigated to create child account screen
#     When Member fills all child details in form with Child age between 6 to 18
#     And  accepts minor informed consent, Spring health terms and condition  and COPPA policy
#     And  submits form
#     Then Member verifies child email id
#     And  is  asked to choose user to login


 