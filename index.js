const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

const questions = [
    {
        type: "input",
        name: "project-title",
        message: "name project",
    },
    {
        type: "input",
        name: "description",
        message: "provide a short description of  your project",
    },
    {
        type: "input",
        name: "installation",
        message: "detail what you need to install this project"
    },
    {
        type: "input",
        name: "usage",
        message: "provide how to use particular project"

    },
    {
        type: "input",
        name: "credits",
        message: "Write all contributors using a GitHub link"
    },
    {
        type: "input",
        name: "features",
        messages: "List features of project"
    },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Making README File");
        writeToFile("./dist/README.md", generateMarkdown(responses));
    });
}
init();
