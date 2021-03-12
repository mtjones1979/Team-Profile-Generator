
const generatedHTML = (data) => {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>My Team</title>
    </head>
    <body>
    <div class="card manager-card">
    <div class="card-header">
        <h1 class="card-title">${data.name}</h2>
        <h2 class="card-title">Manager<h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${data.email}}">${data.email}</a></li>
            <li class="list-group-item">Office number: ${data.officeNumber}</li>
        </ul>
    </div>
</div>
    </body>
    </html>`;
}
module.exports = generatedHTML;