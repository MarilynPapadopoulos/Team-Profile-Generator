const fs = require('fs');
const Index = require ('../index.js');

generatePage = (teamArray) => {

    var detail = "";
    for(let i=0; i< teamArray.length; i++) {
        let name = teamArray[i].name;
        let role = teamArray[i].role;
        let id = teamArray[i].id;
        let email = teamArray[i].email;
        

            if (teamArray[i].role === 'Manager') {
                detail = detail + `
                <div class="col-sm-6">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <h6 class="card-subtitle mb-2">${role}</h6>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:"${email}>${email}</a></li>
                            <li class="list-group-item">Number: ${teamArray[i].number}</li>
                        </ul>
                    </div>  
                </div>    
                `
            }
            if (teamArray[i].role === 'Engineer') {
               
                detail = detail + `
                <div class="col-sm-6">
                    <div class="card" style="width: 18rem;"> 
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <h6 class="card-subtitle mb-2">${role}</h6>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:"${email}>${email}</a></li>
                            <li class="list-group-item">GitHub:<a href="https://github.com/"${teamArray[i].github} target="_blank">${teamArray[i].github}</a></li>
                        </ul>
                    </div>
                    
                </div>    
                `
            }
            if (teamArray[i].role === 'Intern') {
                
                detail = detail + `
                <div class="col-sm-6">
                    <div class="card" style="width: 18rem;"> 
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <h6 class="card-subtitle mb-2">${role}</h6>
                        </div>    
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email:  <a href="mailto:"${email}>${email}</a></li>
                            <li class="list-group-item">School: ${teamArray[i].school}</li>
                        </ul>
                    </div>
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
            
            <title>Team Profile Generator</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

            <link rel="stylesheet" href="styles.css">
        </head>
        
        <body>
            <h1>My Team</h1>
            <div class="container">
                <div class="row">
                    
                        ${detail}
                   
                </div>
            </div>
        

        </body>
        </html>
        `;    
    
     
};


module.exports = generatePage;
