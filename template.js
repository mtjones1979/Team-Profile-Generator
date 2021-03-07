const generatedHTML = (responses) => 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>My Team</title>
    </head>
    <body>
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${responses.name}</h2>
        <h3 class="card-title">Manager<h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${responses.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${responses.email}}">${responses.email}</a></li>
            <li class="list-group-item">Office number: ${responses.officeNumber}}</li>
        </ul>
    </div>
</div>
    </body>
    </html>`;
module.exports = generatedHTML;