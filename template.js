
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
           <h1 class="navbar-brand mb-3 w-100 text-center text-uppercase">${manager.teamName}</h1>
        </nav>
        <div class="container">
           <div class="row">
           <div class="col-6">
              <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header bg-success text-white"><strong>${manager.getName()}</strong><br /><br>Manager</h5>
                <ul class="list-group list-group-flush">
                   <li class="list-group-item font-weight-bold">ID: <em>${manager.getId()}</em></li>
                   <li class="list-group-item font-weight-bold">Email Address: <em>${manager.getEmail()}</em></li>
                   <li class="list-group-item font-weight-bold">Office Phone: <em>${manager.getOfficeNumber()}</em></li>
                </ul>
              </div>
            </div>
            `;
    };
    const generateEngineer = engineer => {
        return `
        <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header bg-success text-white"><strong>${engineer.getName()}</strong><br><br>Engineer</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item font-weight-bold">ID: <em>${engineer.getId()}</em></li>
                    <li class="list-group-item font-weight-bold">Email Address: <em>${engineer.getEmail()}</em></li>
                    <li class="list-group-item font-weight-bold">GitHub: <em>${engineer.getGitHub()}</em></li>
                </ul>
            </div>
        </div>
            `;
    };
    const generateIntern = intern => {
        return `
        <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header bg-success text-white"><strong>${intern.getName()}</strong><br><br>Intern</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item font-weight-bold">ID: <em>${intern.getId()}</em></li>
                    <li class="list-group-item font-weight-bold">Email Address: <em>${intern.getEmail()}</em></li>
                    <li class="list-group-item font-weight-bold">School: <em>${intern.getSchool()}</em></li>
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
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
   htmlCards.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    htmlCards.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
    
    return htmlCards.join("");
}

module.exports = generateHTML;