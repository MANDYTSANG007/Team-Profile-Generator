function generate(employees) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
    <header>
        <h1> Team Profile </h1>
    </header>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Name: </h5>
        <h6 class="card-subtitle mb-2 text-muted">Role: </h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: </li>
            <li class="list-group-item">Email: </li>
            <li class="list-group-item">GitHub: </li>
        </ul>
        </div>
    </div>
<div>Hello World!</div>
</body>
</html>
    
    
    
    
    `;
}

module.exports = generate