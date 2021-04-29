const fs = require('fs');
const Index = require ('../index.js');

generatePage = (teamArray) => {
console.log("hello");
    var detail;
    for(let i=0; i<= teamArray.length; i++) {
        let name = teamArray[i].name;
        let role = teamArray[i].role;
        let id = teamArray[i].id;
        let email = teamArray[i].email;

            if (teamArray[i].role === 'Manger') {
                detail = "Number: " + teamArray[i].number;
            }
            if (teamArray[i].role === 'Engineer') {
                detail = "GitHub: " + teamArray[i].github;
            }
            if (teamArray[i].role === 'Intern') {
                detail = "School: " + teamArray[i].school;
            }

        return `
        <!DOCTYPE html> 
        <html lang="en"> 
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Profile Generator</title>
        </head>
        
        <body>
            <h1>My Team</h>
        
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">${detail}</li>
            </ul>
            </div>
        </div>
        
        
        
        </body>
        </html>
        `;    
    }
     
};

module.exports = generatePage;

// fs.writeFile('/index.html', generatePage(), err => {
//     if (err) throw err;
// })