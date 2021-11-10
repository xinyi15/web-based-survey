const express = require('express');
const { read } = require('fs');
const path = require('path')
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');


const pool = new Pool({
user: 'jovttytttjkoaw',
host: 'ec2-52-23-45-36.compute-1.amazonaws.com',
database: 'de369o7l6fqn9p',
password: '77d7812505f2328350b04d9fb5bb45ade034c24a216d4ac59682c55fcce5941b',
port: 5432,
});

var timeNow = new Date();
const app = express()
//app.set("view options", {layout: false});
app.use(express.static(path.join(__dirname, 'build'))); 
app.get('/answer',function(req,res){
    // console.log(req.body);
    //pool.query('INSERT INTO answer (id, Time, survey, question, answer, date) VALUES ("'+ req.body.id+'","'+ req.body.time+'","'+req.body.survey+'","'+req.body.question +'","'+req.body.answer+'",'+"10)", (err, res) => {
       // console.log(err, res);
     //   pool.end();
        res.send('WWWWWÍ');
        // });
});
app.post('/', function(req, res) { res.sendFile(path.join(__dirname + '/build/index.html')); });



app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
