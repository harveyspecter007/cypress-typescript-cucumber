import { Given,When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/LoginPage';

const loginPage = new LoginPage();

Given('I visit {string}', (url: string) => {
  cy.visit(url);
});

When('I enter valid username and password', (dataTable: DataTable) => {
  const credentials = dataTable.hashes()[0]; 
  const username = credentials.username;
  const password=credentials.password;
  loginPage.enterCredentialsAndLogin(username,password)
});

Then('I should be logged in', () => {
  cy.contains('Swag Labs');
});

When('I enter Invalid username and password', (dataTable: DataTable) => {
  const credentials = dataTable.hashes()[0]; 
  const username = credentials.username;
  const password=credentials.password;
  loginPage.enterCredentialsAndLogin(username,password)
});

Then('I should see the error Message', () => {
  cy.get('h3[data-test="error"]').should('be.visible');
  cy.contains('Username and password do not match any user in this service');
});

When('I enter Invalid {string} and {string}', (username: string, password: string) => {
  loginPage.enterCredentialsAndLogin(username,password)
});