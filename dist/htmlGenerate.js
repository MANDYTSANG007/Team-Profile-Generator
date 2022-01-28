function generate(employees) {
    var teamInfoHTML = '<div>'
    for (let employee of employees) {
        if(employee.role === "Manager") {
            teamInfoHTML += `<div>Name: ${employee.name}</div>`
            teamInfoHTML += `<div>Role: ${employee.role}</div>`
            teamInfoHTML += `<div>ID: ${employee.id}</div>`
            teamInfoHTML += `<div>Email:<a href="mailto:${employee.email}">${employee.email}</a> </div>`
            teamInfoHTML += `<div>Office Number: ${employee.officeNumber}</div><br>`;
            
        }else if (employee.role === "Engineer"){
            teamInfoHTML += `<div>Name: ${employee.name}</div>`
            teamInfoHTML += `<div>Role: ${employee.role}</div>`
            teamInfoHTML += `<div>ID: ${employee.id}</div>`
            teamInfoHTML += `<div>Email:<a href="mailto:${employee.email}">${employee.email}</a></div>`
            teamInfoHTML += `<div>GitHub:<a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></div><br>`;
            
        }else if (employee.role === "Intern"){
            teamInfoHTML += `<div>Name: ${employee.name}</div>`
            teamInfoHTML += `<div>Role: ${employee.role}</div>`
            teamInfoHTML += `<div>ID: ${employee.id}</div>`
            teamInfoHTML += `<div>Email:<a href="mailto:${employee.email}">${employee.email}</a></div>`
            teamInfoHTML += `<div>School: ${employee.school}</div><br>`;
            
        }
      
    }
    teamInfoHTML += '</div>'

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
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">

            
            ${teamInfoHTML}

            </div>
        </div>
    </div>


</body>
</html>
    
    
    
    
    `;
}

module.exports = generate