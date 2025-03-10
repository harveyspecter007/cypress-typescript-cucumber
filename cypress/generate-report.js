const report = require("multiple-cucumber-html-reporter");
const fs = require("fs");

const jsonReportPath = "cypress/cucumber-json/cucumber-report.json";

// Ensure JSON report file exists before generating the report
if (!fs.existsSync(jsonReportPath)) {
  console.error("JSON report not found. Run Cypress tests first.");
  process.exit(1);
}

// Read and validate JSON
let jsonData;
try {
  jsonData = JSON.parse(fs.readFileSync(jsonReportPath, "utf-8"));

  // Ensure JSON is an array and has valid features
  if (!Array.isArray(jsonData) || jsonData.length === 0) {
    throw new Error("Invalid JSON format: Expected an array of features.");
  }

  // Add default `uri` if missing
  jsonData = jsonData.map((feature) => ({
    ...feature,
    uri: feature.uri || "unknown.feature",
  }));
} catch (error) {
  console.error("Error parsing JSON report:", error.message);
  process.exit(1);
}

// Generate the HTML report
report.generate({
  jsonDir: "cypress/cucumber-json/",
  reportPath: "cypress/reports/html",
  metadata: {
    browser: {
      name: "chrome",
      version: "latest",
    },
    device: "Cypress",
    platform: {
      name: "Mac",
      version: "15.3.1",
    },
  },
});

console.log("Cucumber HTML report generated successfully!");
