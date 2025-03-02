import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

let apiEndpoint: string;
let apiResponse: Cypress.Response<any>;
Given('I have the API Endpoint {string}', (endpoint: string) => {
    apiEndpoint = endpoint;
});

When('I send a POST Request with valid Payload', () => {
    const validPayload = {
        name: 'Example Resource',
        description: 'This is a valid resource.',
    };

    cy.request({
        method: 'POST',
        url: apiEndpoint,
        body: {
            name: "morpheus",
            job: "leader",
        },
    }).then((response) => {
        apiResponse = response;
    });
});

Then('API Should respond with success code', () => {
    expect(apiResponse.status).to.be.oneOf([200, 201, 204]);
});

When('I send a PUT Request with valid Payload', () => {
    const validPayload = {
        name: 'Example Resource',
        description: 'This is a valid resource.',
    };

    cy.request({
        method: 'PUT',
        url: apiEndpoint,
        body: {
            name: "QAAutomationLabs",
            job: "QA Automation Engg",
        },
    }).then((response) => {
        apiResponse = response;
    });
});