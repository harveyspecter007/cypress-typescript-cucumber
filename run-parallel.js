const { exec } = require('child_process');



const featureFiles = [

    'cypress/e2e/features/Login.feature',
    'cypress/e2e/features/LoginExamples.feature',
    'cypress/e2e/features/Api.feature',

];



featureFiles.forEach((file) => {

    const command = `npx cypress run --spec "${file}"`;

    console.log(`Running: ${command}`);

    exec(command, (error, stdout, stderr) => {

        if (error) {

            console.error(`Error running ${file}: ${error}`);

            return;

        }

        console.log(`Finished Test Execution ${file}`);

    });

});