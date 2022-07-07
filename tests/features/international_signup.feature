Feature: Sign up feature

Create Spring Health member account for user who does not live in US

Background:
  Given User does not have Spring Health account
  And   Is offered Spring Health by Organization 
  And   Does not Lives in US

  Scenario: As a valid International covered life, User wants to create Spring health member account for himself
    When User completes manual verification successfully
    Then User is navigated to create account screen
    When User fill form with valid data
    And  accepts informed consent and Spring health terms and condition 
    And  submits form 
    Then User verifies his mail
    And  Is navigated to Personalize you details screen
