function generateMarkdown(data) {
    return `# ${data.title} 
     ${renderLicenseBadge(data.license)}
    ## Description
    ${data.description}
    ## Deployed Application URL
    ${data.link}
    ## Screenshot
    ![alt-text](${data.screenshot})
    ## Table of Contents
    * [Features](#features)
    * [Languages & Dependencies](#languagesanddependencies)
    * [How to Use This Application](#HowtoUseThisApplication)
    * [Contributors](#contributors)
    * [Testing](#testing)
    * [Questions](#questions)
    ## Features
    ${data.features}
    ## Languages & Dependencies
    ${data.require}
    ## How to Use This Application:
    ${data.usage}
    ## Contributors
    ${data.contributors}
    ## Testing
    ${data.test}
    ## Questions
    Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
    `;
}
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

module.exports = generateMarkdown