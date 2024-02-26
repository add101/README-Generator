const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project name:",
  },
  {
    type: "input",
    name: "description",
    message: "Short description of project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage information:",
  },
  {
    type: "list",
    name: "license",
    message: "License Type",
    choices: ["MIT", "Apache 2.0", "GPL", "BSD3", "Other"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Test instructions:",
  },
  {
    type: "input",
    name: "githubusername",
    message: "GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "e-mail address:",
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`README.md generated successfully as ${fileName}`);
    }
  });
}

// function to generate markdown
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} License.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions about this project, please reach out to ${data.email}. You can also visit my [GitHub profile](https://github.com/${data.githubusername}).
`;
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);

    const outputDir = path.resolve(__dirname, "output");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    const outputFile = path.join(outputDir, "README.md");
    writeToFile(outputFile, readmeContent);
  });
}

// function call to initialize program
init();

