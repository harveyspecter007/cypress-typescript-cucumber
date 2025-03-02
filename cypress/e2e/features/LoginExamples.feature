Feature: Login Functionality

  Scenario Outline: Invalid Login scenario
    Given I visit "https://www.saucedemo.com"
    When I enter Invalid "<username>" and "<password>"
    Then I should see the error Message

    Examples:
      | username         | password     |
      | standard_user222 | secret_sauce |
      | standard_user333 | secret_sauce |
      | standard_user444 | secret_sauce |

