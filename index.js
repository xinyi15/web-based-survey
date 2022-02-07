const express = require('express');
const path = require('path')
const sendSms = require('./twilio');
const bodyParser = require('body-parser');
const phone_num= require('./phone.json');
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// var pool = new Pool({
//     user: 'jovttytttjkoaw',
//     host: 'ec2-52-23-45-36.compute-1.amazonaws.com',
//     database: 'de369o7l6fqn9p',
//     password: '77d7812505f2328350b04d9fb5bb45ade034c24a216d4ac59682c55fcce5941b',
//     port: 5432,
//     });

const app = express();
//app.set("view options", {layout: false});
app.use(express.static(path.join(__dirname, 'build'))); 
app.use(express.json());
app.post('/answer',async (req,res)=>{
  console.log('INSERT INTO answer (id, time, survey, question, answer, date) VALUES ("'+ req.body.id+'","'+ req.body.time+'","'+req.body.survey+'","'+req.body.question +'","'+req.body.answer+'","'+req.body.date+'")');
const client = await pool.connect();
var result = await client.query("INSERT INTO answer (id, time, survey, question, answer, date) VALUES ("+ req.body.id+",'"+ req.body.time+"','"+req.body.survey+"','"+req.body.question +"','"+req.body.answer+"','"+req.body.date+"')"
);
client.release();
const welcomeMessage = 'Please complete your survey';
console.log(phone_num["1"]);
sendSms(phone_num[1], welcomeMessage);
res.send('Success'); 
});

app.post('/', function(req, res) { res.sendFile(path.join(__dirname + '/build/index.html')); });

const userDatabase = [];

// Create user endpoint
app.post('/users', (req, res) => {
  const { email, password, phone } = req.body;
  const user = {
    email,
    password,
    phone
  };

  userDatabase.push(user);

  const welcomeMessage = 'Welcome to my Chillz! Your verification code is 54875';

  //sendSms(user.phone, welcomeMessage);
  sendSms(phone_num["1"], welcomeMessage);
  res.status(201).send({
    message: 'Account created successfully, kindly check your phone to activate your account!',
    data: user
  })
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
