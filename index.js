const express = require('express');
const path = require('path');
const sendSms = require('./twilio');
//const bodyParser = require('body-parser');
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
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.json());

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('pages/survey'))

 app.post('/answer',async (req,res)=>{
 console.log('INSERT INTO answer (id, time, survey, question, answer, date) VALUES ("'+ req.body.id+'","'+ req.body.time+'","'+req.body.survey+'","'+req.body.question +'","'+req.body.answer+'","'+req.body.date+'")');
const client = await pool.connect();
 var result = await client.query("INSERT INTO answer (id, time, survey, question, answer, date) VALUES ("+ req.body.id+",'"+ req.body.time+"','"+req.body.survey+"','"+req.body.question +"','"+req.body.answer+"','"+req.body.date+"')"
 );
 client.release();

//  const Message = 'Please complete your survey';
//  console.log(phone_num["1"]);
//  sendSms(phone_num[1], Message);
 res.send('Success'); 
 });


 function is_expired(start,end){
  let date_ob = new Date();
  let hours = date_ob.getHours();
    if((hours>=start)&(hours<end)){
      return false;
    }else{
      return true;
    }
 }

  app.get('/survey/:id/:surveyname/:time/:qlist/:start/:end', function(req, res){

    if (is_expired(req.params.start,req.params.end)) {
    res.send('Sorry your link has expired');
    }else{
      res.render('pages/survey',{
        id: req.params.id,
        surveyname: req.params.surveyname,
        time: req.params.time,
        qlist: req.params.qlist
      });
    }
  });


  
  app.get('/surveynew/:id',async (req,res)=>{
    const client2 = await pool.connect();
    var result2 = await client2.query('Select * from question where id='+req.params.id );
    client2.release();
    res.send(result2.rows.id);
  });

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
