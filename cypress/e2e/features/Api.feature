Feature:API Validation

Scenario: create a new Resource

Given I have the API Endpoint "https://reqres.in/api/users"
When I send a POST Request with valid Payload
Then API Should respond with success code

Scenario: Update a Resource

Given I have the API Endpoint "https://reqres.in/api/users/2"
When I send a PUT Request with valid Payload
Then API Should respond with success code