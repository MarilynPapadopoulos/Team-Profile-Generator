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
console.log(detail);

        return `
        <!DOCTYPE html> 
        <html lang="en"> 
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            
            <title>Team Profile Generator</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

            <link rel="./dist/stylesheet" href="styles.css">
        </head>
        
        <body>
            <h1>My Team</h1>
        
            <div class="card" style="width: 18rem;">
                ${detail}
            </div>
        

            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
          
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
        </body>
        </html>
        `;    
    
     
};


module.exports = generatePage;
