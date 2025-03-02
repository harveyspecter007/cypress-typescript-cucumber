Cypress TypeScript Project with Cucumber and HTML Reporting

Project Overview:
-----------------

This project is a Cypress automation framework using TypeScript and Cucumber for Behavior-Driven Development (BDD). It includes support for generating detailed HTML reports with multiple-cucumber-html-reporter.

Folder Structure:
-----------------

cypress_typescript/
│-- cypress/
│   │-- e2e/                 # Test cases (feature files)
│   │-- fixtures/            # Test data
│   │-- reports/             # Generated HTML reports
│   │-- support/             # Custom commands & utilities
│-- cypress.config.ts        # Cypress configuration
│-- package.json             # Project dependencies & scripts
│-- tsconfig.json            # TypeScript configuration

Running Tests:
--------------

Run Cypress in Interactive Mode

  npm run cypress:open

Run Cypress in Headless Mode

  npm run cypress:run

Generating HTML Reports:
-----------------------

1️) Run Cypress Tests

Ensure test execution generates JSON reports.

  npm run cypress:run

2️) Generate HTML Report

   npm run generate-report

3) Run Tests in parallel (Feature File wise)

   node run-parallel.js

4) Run Tests based on Cucumber Tags

   npx cypress run --env tags="@Test"

