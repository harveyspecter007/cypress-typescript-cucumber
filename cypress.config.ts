import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin, afterRunHandler } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import * as fs from "fs";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Generate valid Cucumber JSON report after tests
      on("after:run", async (results) => {
        if (results && results.runs.length > 0) {
          const jsonDir = "cypress/cucumber-json/";
          
          if (!fs.existsSync(jsonDir)) {
            fs.mkdirSync(jsonDir, { recursive: true });
          }

          const cucumberResults = results.runs.map((run) => ({
            keyword: "Feature",
            name: run.spec.name || "Unnamed Feature",
            uri: run.spec.relative || "Unknown URI",
            elements: run.tests.map((test) => ({
              keyword: "Scenario",
              name: test.title || "Unnamed Scenario",
              steps: test.attempts.map((attempt) => ({
                keyword: attempt.title || "Step",
                name: attempt.title || "Step",
                result: { status: attempt.state || "unknown" },
              })),
            })),
          }));

          fs.writeFileSync(`${jsonDir}/cucumber-report.json`, JSON.stringify(cucumberResults, null, 2));
          console.log(`Cucumber JSON report generated at: ${jsonDir}/cucumber-report.json`);
        } else {
          console.warn("No test runs found. Cypress might have failed before execution.");
        }
      });

      return config;
    },
  },
});
