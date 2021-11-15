const mysql = require('mysql');
const inquirer = require('inquirer');
require("console.table")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "enter",
    database: "daniel1"
});

connection.connect();

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
});

app.get("/",(req,res) => {
    connection.query('SELECT * from users LIMIT 1', (err, rows) => {
        if(err) throw err;
        console.log('The data from users table are: \n', rows);
        connection.end();
    });
});

app.listen(3306, () => {
    console.log('Server is running at port 3306');
});


function beginningPrompt() {

    inquirer.prompt({
        type: "list",
        name: "task",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Employees by Department",
            "View All Employees by Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "End"]

        })
        
        .then(function({ task }) {
            switch (task) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "View All Employees by Department":
                    viewAllEmployeesByDepartment();
                    break;
                case "View All Employees by Manager":
                    viewAllEmployeesByManager();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Remove Employee":
                    removeEmployee();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                case "Update Employee Manager":
                    updateEmployeeManager();
                    break;   

                case "End":
                    connection.end();
                    break;
            }
        }); 
}





        
