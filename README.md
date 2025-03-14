Cypress TypeScript Project with Cucumber and HTML Reporting

Project Overview:
-----------------

This project is a Cypress automation framework using TypeScript and Cucumber for Behavior-Driven Development (BDD). It includes support for generating detailed HTML reports with multiple-cucumber-html-reporter.

It Follows Page Object Model where Every page in the Front End will have a Typescript class with the Locators and Methods related to that page.
Step Definitions class acts as an interface to feature files and page Objects
Feature Files will have test scenarios in BDD model for wider audience.

**PreRequisites:**
--> install Node latest version

**Installation & Setup**

1️⃣ **Clone the Repository**

git clone https://github.com/harveyspecter007/cypress-typescript-cucumber.git

cd cypress_typescript

2️⃣ **Install Dependencies**

npm install

Running Tests:
--------------

Run Cypress in Interactive Mode

  **npm run cypress:open**

Run Cypress in Headless Mode

  **npm run cypress:run**

Generating HTML Reports:
-----------------------

1️) Run Cypress Tests

Ensure test execution generates JSON reports.

  **npm run cypress:run**

2️) Generate HTML Report

  **npm run generate-report**

  The Report will be Generated in cypress/Reports Folder.

  Sample Report:

  ![alt text](cypress/SampleReport.png)

3) Run Tests in parallel (Feature File wise)

  **node run-parallel.js**

4) Run Tests based on Cucumber Tags or Feature Files

  **npx cypress run --env tags="@Test"**
  **npx cypress run --spec **/Login.feature**

