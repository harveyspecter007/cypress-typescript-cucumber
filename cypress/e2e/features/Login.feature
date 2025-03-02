Feature: Example Feature

  @Test
  Scenario: Valid Login Scenario
    Given I visit "https://www.saucedemo.com"
    When I enter valid username and password
      | username      | password     |
      | standard_user | secret_sauce |
    Then I should be logged in

  Scenario: Invalid Login scenario
    Given I visit "https://www.saucedemo.com"
    When I enter Invalid username and password
      | username         | password     |
      | standard_user222 | secret_sauce |
    Then I should see the error Message
