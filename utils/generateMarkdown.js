
// function to generate markdown for README
function generateMarkdown(Response) {

  let tableContent = `## Table of Content`;

  let draftMarkdown = `# ${Response.title}

  ## Git Repository URL

  *  ${Response.repo}

  ## Description

  ${Response.description}

  `

  //table of content
  draftMarkdown += tableContent;
  
  
  draftMarkdown += `
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)`;


//installation
  draftMarkdown += `* 
  ## Installation

  Steps required to install project .
  
  * ${Response.installation}
  `

  //usage part
  draftMarkdown += `
  ## Usage

  Instruction about usage

  * ${Response.usage}`

//contributting part
  draftMarkdown += `
  ## Contributing

  Follow the guidelines to contribute.


  * ${Response.contributing}` 
  

  //license part
  draftMarkdown += `
  ## License

  Whatever license you have used.

  * ${Response.license}
` 
    
  draftMarkdown += `
  ## Contact  

  Please contact me if you have question or concern..

 * Email Me @ ${Response.Email}`

  return draftMarkdown;

}

module.exports = generateMarkdown;
