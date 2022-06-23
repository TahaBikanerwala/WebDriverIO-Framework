Feature: Login Feature

Background:
    Given Member is on the login screen

  Scenario: As a member, I cannot log into the application
    When The member logs in with incorrrect username and password
    Then The member should get an error message displayed

  Scenario: As a member, I can log into the application
    When The member logs in with corrrect username and password
    Then The member should be able to reach the Home Page of the app

    # Then I should see join page

    # Examples:
    #   | username | password             | message                        |
    #   | tomsmith | SuperSecretPassword! | You logged into a secure area! |
    #   | foobar   | barfoo               | Your username is invalid!      |
