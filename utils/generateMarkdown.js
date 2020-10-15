function generateMarkdown(data) {

return `# ${data.title}

${data.description}

## Contributing

${data.contributing}

## Installation

\`\`\`
${data.installation}
\`\`\`

## Tests
To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

${data.usage}

## License

${data.license}

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;