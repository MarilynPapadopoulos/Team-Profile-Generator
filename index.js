const inquirer = require("inquirer");
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const fs = require("fs");
const generatePage = require("./src/html-template.js");

const teamArray =[];

const promptUser = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Please enter your manager's name.",
            validate: (mangerInput) => {
                if (mangerInput) {
                    return true;
                } else {
                    console.log("Please enter your manager's name.")
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your employee ID.",
            validate: (idInput) => {
                if(idInput) {
                    return true;
                } else {
                    console.log("Please enter your employee ID.");
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address.",
            validate: (emailInput) => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email address.")
                }
            }
        },
        {
            type: "input",
            name: "number",
            message: "Please enter your office number (999-999-9999).",
            validate: (numberInput) => {
                if (numberInput) {
                    return true;
                } else {
                    console.log("Please enter your office number.")
                }
            }
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.number);
        teamArray.push(manager);
        console.log(Manager, typeof Manager);
        console.log(Manager.name, typeof Manager.name);
        promptTeam();
    }) 
}


promptTeam = () => {
    inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "Please choose from the following options:",
            choices: [
                "I would like to add an engineer to my team.",
                "I would like to add and intern to my team.",
                "I am finished building my team."
            ]
        }
])
.then(answers => {
    if (answers.role === "I would like to add an engineer to my team.") {
        promptEngineer();
    }
    if (answers.role === "I would like to add and intern to my team.") {
        promptIntern();
    }
    if(answers.role === "I am finished building my team.") {
        teamCompleted();
    }
})

}
promptEngineer = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter ther engineer's name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter engineer's ID."
        },
        {
            type: "input",
            name: "email",
            message: "Enter engineer's email address"
        },
        {
            type: "input",
            name: "github",
            message: "Enter engineer's GitHub."
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamArray.push(engineer);
        promptTeam();
    }) 
}
promptIntern = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter intern's ID."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email address."
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school."
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamArray.push(intern);
        promptTeam();
    })
}
teamCompleted = () => {
    console.log("team Completed", typeof teamArray)
    fs.writeFile("index.html", generatePage(teamArray), (err) => {
        if (err) throw err;
        console.log("File written successfully");
    });
    
}

promptUser();

module.exports = teamArray;
   