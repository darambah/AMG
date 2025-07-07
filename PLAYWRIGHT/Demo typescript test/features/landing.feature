Feature: Landing page navigation and video

  Background:
    Given I open the landing page

  Scenario: Navigate to each section
    When I go to "Contact"
    Then I should see URL fragment "#contact"

    When I go to "About Me"
    Then I should see URL fragment "#about"

    When I go to "Work History"
    Then I should see URL fragment "#service"

Scenario: Play and close embedded video
  Given I open the landing page
  When I click the play button on the page
  When I play the YouTube video
  Then the popup should appear
  When I close the video popup
  Then the popup should disappear


