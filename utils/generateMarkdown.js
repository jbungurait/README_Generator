require('dotenv').config();

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = '';
  switch(license) {
    case 'MIT License':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'Eclipse Public License 2.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)`
      break;
    case 'GNU Affero General Public Livense v3.0':
      licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
      break;
    case 'GNU General Public License v2.0':
      licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
      break;
    case 'Mozilla Public License 2.0':
      licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      break;
    case 'The Unlicense':
      licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
      break;
    case '':
      licenseBadge = ""
      break;
  }
return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   const licenseLink = '';
//   switch(license) {
//     case 'MIT License':
//       licenseLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
//       break;
//     case 'Eclipse Public License 2.0':
//       licenseLink = `[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)`
//       break;
//     case 'GNU Affero General Public Livense v3.0':
//       licenseLink = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
//       break;
//     case 'GNU General Public License v2.0':
//       licenseLink = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
//       break;
//     case 'Mozilla Public License 2.0':
//       licenseLink = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
//       break;
//     case 'The Unlicense':
//       licenseLink = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
//       break;
//     case '':
//       licenseLink = ""
//       break;
//   }
// return licenseLink;
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description

  ${data.description}

  ## Table of Contents

  - Installation [#installation]

  - Usage [#usage]

  - Credits [#credits]

  - License [#license]

  - Features [#features]

  - Contribution [#contribution]

  - Tests [#tests]

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ### [Github](https://github.com/jbungurait)
  ### [Email](mailto:${process.env.email})
  ### [LinkedIn](https://www.linkedin.com/in/josh-ungurait-0045b352/)

  ## License

  This project licensed under ${renderLicenseBadge(data.license)}.

  ## Features

  ${data.features}

  ## Contribution

  ${data.contribution}

  ## Tests 

  ${data.tests}


`;
}

module.exports = generateMarkdown;
