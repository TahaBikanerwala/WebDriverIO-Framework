Feature: Login Feature

Background:
    Given Member is on the login screen

  Scenario: As a member, I cannot log into the application with invalid credentails
    When Member submits invalid username and password
    Then An error message is displayed to member

  Scenario: As a member, I can log into the application with valid credentials
    When Member submits valid username and password
    Then Member is asked to enable biometrics
    