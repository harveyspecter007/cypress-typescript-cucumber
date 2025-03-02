import { defineConfig } from 'cypress';
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  
  e2e: {
    specPattern: "cypress/**/*.feature",
    
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config,);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      config.env.cucumberJson = {
        generate: true,
        output: "cypress/cucumber-json/results.json",
      };

      return config;
    },
    
  },
  
  
});