const mysql = require('mysql');
const inquirer = require('inquirer');
require("console.table")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Yellow31782!",
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
