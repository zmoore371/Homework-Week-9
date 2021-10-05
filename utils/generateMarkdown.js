// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else {
    return license;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log("hola")
  // console.log(data)
  license = data.license;
  console.log(renderLicenseBadge(license));
  
  return `
  <h1 align="center">${data.title}</h1>
  
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
   
  ## Description
   ${data.description}
   
   ## Table of Contents
   - [Description](#description)
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
   ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
   <br />
   This application is covered by the ${data.license} license. 
   
   ## Contributors
   ${data.contributors}
   
   ## Tests
   ${data.tests}
 
   ## Questions
   Questions or concerns? Feel free to reach out to me:<br />
   <br />
   Link to Github: [${data.user}](https://github.com/${data.user})<br />
   <br />
   Email me with any questions: ${data.email}<br /><br />`

}

module.exports = generateMarkdown;


