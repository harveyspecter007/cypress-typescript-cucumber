const report = require('multiple-cucumber-html-reporter');
const fs = require('fs-extra');
const path = require('path');

const reportOutputDir = './cypress/reports/html';
const jsonOutputDir = './cypress/cucumber-json';

async function generateReport() {
  await fs.ensureDir(reportOutputDir);

  report.generate({
    jsonDir: jsonOutputDir,
    reportPath: reportOutputDir,
    metadata: {
      browser: {
        name: 'chrome'
      },
      device: 'Local test machine',
      platform: {
        name: 'Mac'
      },
    },
  });
}

generateReport();