
function renderLicenseBadge(license) {
  switch (license) {
    case "none": 
      console.log("none");
      return "no software";
    
      case "MIT":  
        console.log("MIT");
        return " the MIT";

      case "GNU General Public License 2.0": 
        console.log("GNU General Public License 2.0");  
        return ("the GNU General Public License 2.0");

      case "Apache License 2.0":
        console.log("Apache License 2.0");  
        return("the Apache License 2.0");
  }
}
function renderLicenseLink(license) {
  switch (license) {
    case "none": 
      console.log("none");
      return "";
    
      case "MIT":  
        console.log("MIT");
        return ("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");

      case "GNU General Public License 2.0": 
        console.log("GNU General Public License 2.0");  
        return ("[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)");

      case "Apache License 2.0":
        console.log("Apache License 2.0");  
        return("[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
  
  }
}
function generateMarkdown(data) {
  license = data.license;
  const chosenLic = renderLicenseBadge(license)
  const chosenLicLink = renderLicenseLink(license)

  return `
  <h1 align="center">${data.title}</h1>
  
  ${chosenLicLink}<br />
   
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
   ${chosenLicLink}
   <br />
   This application is covered by ${chosenLic} license. 
   
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


