// utils/generateMarkdown.js
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Contact
- GitHub: [${data.githubusername}](https://github.com/${data.githubusername})
- Email: ${data.email}

## License
This project is licensed under the ${data.license} License.
`;
}

module.exports = generateMarkdown;
