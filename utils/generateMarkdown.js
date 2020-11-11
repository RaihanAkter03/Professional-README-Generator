
// function to generate markdown for README
function generateMarkdown(Response, info) {
//   return `# ${data.title}

// `;
  let tableContent = `## Table of Content`;
  tableContent += `* [Installation](#installation)`;
  tableContent += `* [Usage](#usage)`;
  tableContent += `* [Contributing](#contributing)`;
  tableContent += `* [Tests](#tests)`;

  let draftMarkdown = `# ${Response.title}

  ## Description

  ${Response.description}`
  draftMarkdown += tableContent;
  draftMarkdown += `* [License](#license)`;


  draftMarkdown += `* 
  ## Installation

  Note:Steps required to install project .
  ${Response.installation}`

  draftMarkdown += `
  ## Usage

  Note: Instruction about usage

  ${Response.usage}`

  draftMarkdown += `
  ## Contributing

  Note:Follow the guidelines to contribute.
${Response.contributing}` 
  

  draftMarkdown += `
  ## Tests

  Note:Follow the guidelines to contribute.
${Response.tests}` 

  draftMarkdown += `
  ## License

  Note:Follow the guidelines to contribute.
${Response.license}` 
  
  draftMarkdown += `
  ## Contact  

  Please contact me if you have questiona nd concern..

Email Me @ ${info.email}`

  return draftMarkdown;

}

module.exports = generateMarkdown;
