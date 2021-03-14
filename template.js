
const generateHTML = team => {
    
    const generateManager = manager => {
       return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <title>Team Profile</title>
        </head>
        <body>
        <nav class="navbar navbar-dark bg-primary mb-5">
           <span class="navbar-brand mb-3 h1 w-100 text-center text-uppercase">${manager.teamName}</span>
        </nav>
        <div class="container">
           <div class="row">
           <div class="col-6">
              <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header bg-success text-white"><strong>${manager.name}</strong><br /><br>Manager</h5>
                <ul class="list-group list-group-flush">
                   <li class="list-group-item font-weight-bold">ID: <em>${manager.id}</em></li>
                   <li class="list-group-item font-weight-bold">Email Address: <em>${manager.email}</em></li>
                   <li class="list-group-item font-weight-bold">Office Phone: <em>${manager.officeNumber}</em></li>
                </ul>
              </div>
            </div>
            `;
    };
    const generateEngineer = engineer => {
        return `
        <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header bg-success text-white"><strong>${engineer.name}</strong><br><br>Engineer</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item font-weight-bold">ID: <em>${engineer.id}</em></li>
                    <li class="list-group-item font-weight-bold">Email Address: <em>${engineer.email}</em></li>
                    <li class="list-group-item font-weight-bold">GitHub: <em>${engineer.github}</em></li>
                </ul>
            </div>
        </div>
            `;
    };
    const generateIntern = intern => {
        return `
        <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header bg-success text-white"><strong>${intern.name}</strong><br><br>Intern</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item font-weight-bold">ID: <em>${intern.id}</em></li>
                    <li class="list-group-item font-weight-bold">Email Address: <em>${intern.email}</em></li>
                    <li class="list-group-item font-weight-bold">School: <em>${intern.school}</em></li>
                </ul>
            </div>
        </div>
        </div>
        </div>
        </body>
        </html>
            `;
    };
    const htmlCards = [];
    htmlCards.push(team
        .map(manager => generateManager(manager))
    );
   htmlCards.push(team
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    htmlCards.push(team
        .map(intern => generateIntern(intern))
        .join("")
    );
    
    return htmlCards.join("");
}

module.exports = generateHTML;