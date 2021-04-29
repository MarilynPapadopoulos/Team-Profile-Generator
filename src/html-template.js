const fs = require('fs');
const Index = require ('../index.js');

generatePage = (teamArray) => {
console.log("hello");

    var detail = "";
    for(let i=0; i< teamArray.length; i++) {
        let name = teamArray[i].name;
        let role = teamArray[i].role;
        let id = teamArray[i].id;
        let email = teamArray[i].email;

            if (teamArray[i].role === 'Manager') {
                detail = detail + `
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">${teamArray[i].number}</li>
                    </ul>
                </div>
                `
            }
            if (teamArray[i].role === 'Engineer') {
                //detail = "GitHub: " + teamArray[i].github;
                detail = detail + `
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">${teamArray[i].github}</li>
                    </ul>
                </div>
                `
            }
            if (teamArray[i].role === 'Intern') {
                //detail = "School: " + teamArray[i].school;
                detail = detail + `
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">${teamArray[i].school}</li>
                    </ul>
                </div>
                `
            }
    }


        return `
        <!DOCTYPE html> 
        <html lang="en"> 
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js" integrity="sha512-XKa9Hemdy1Ui3KSGgJdgMyYlUg1gM+QhL6cnlyTe2qzMCYm4nAZ1PsVerQzTTXzonUR+dmswHqgJPuwCq1MaAg==" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="styles.css">
            <title>Team Profile Generator</title>
        </head>
        
        <body>
            <h1>My Team</h>
        
            <div class="card" style="width: 18rem;">
                ${detail}
            </div>
        
        
        
        </body>
        </html>
        `;    
    
     
};


module.exports = generatePage;
