var express = require('express');
var app = express();
var sql = require("mssql");
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var config = {
            host: 'localhost', 
            user: 'babylog',
            password : 'Babypass1',
            port : 51314,
            database:'babyguess'
        };
        
        app.post('/', function(req, res) {
            res.set('Access-Control-Allow-Origin', '*');
            const { firstName, lastName } = req.body;
            let connection = new sql.ConnectionPool(config, function(err) {
                let request = new sql.Request(connection);
                request.query("insert into persons (FirstName, LastName) values ('" + firstName + "', '" + lastName + "')");
            });
            res.send({ message: 'Success'})
        });
        
        app.listen(51314, () => {console.log('Server is running..')});