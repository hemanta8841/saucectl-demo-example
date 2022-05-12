Feature: Cypress Actions Page

  I want to showcase actions

  Scenario: Testing the actions page
    Given I open cypress actions page
    Then I enter "fake@email.com" as the email address
  
  Scenario: amex home page works
    Given I open amex home page
    Then I should see correct title