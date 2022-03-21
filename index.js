const express = require('express');
const path = require('path');
const id_ref= require('./UniqueId.json');
const time_ref= require('./UniqueTime.json');
const ql_ref= require('./UniqueQeuestionList.json');
const survey_ref= require('./UniqueSurvey.json');
const hour_ref= require('./UniqueHour.json');

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
// app.get('/', (req, res) => res.render('pages/survey'))


app.get('/',async (req,res)=>{
  res.render('pages/user_reported_survey1',{
    id:"MP411220",
   surveyname:"EUK039766"
  });
});


app.post('/complete',async (req,res)=>{
console.log('INSERT INTO complete (id, survey, question,  date) VALUES ("'+ req.body.id+'","'+req.body.survey+'","'+req.body.question +'","'+req.body.date+'")');
  const client1 = await pool.connect();
  var result = await client1.query("INSERT INTO complete (id, survey, question,  date) VALUES ("+ req.body.id+",'"+req.body.survey+"','"+req.body.question +"','"+req.body.date+"')"
  );
  client1.release();
  //res.send('Success INSERT INTO complete (id, survey, question,  date) VALUES ("'+ req.body.id+'","'+req.body.survey+'","'+req.body.question +'","'+req.body.date+'")'); 
  });
 /*create a new survey tablr*/


 app.post('/answer',async (req,res)=>{
 console.log('INSERT INTO answer (id, time, survey, question, answer, date) VALUES ("'+ req.body.id+'","'+ req.body.time+'","'+req.body.survey+'","'+req.body.question +'","'+req.body.answer+'","'+req.body.date+'")');
const client = await pool.connect();
 var result = await client.query("INSERT INTO answer (id, time, survey, question, answer, date) VALUES ("+ req.body.id+",'"+ req.body.time+"','"+req.body.survey+"','"+req.body.question +"','"+req.body.answer+"','"+req.body.date+"')"
 );
 client.release();
 res.send('Success'); 
 });
/*create a new survey tablr*/


app.post('/self_reported_answer',async (req,res)=>{
  console.log('INSERT INTO answer (id, time, survey, question, answer, date) VALUES ("'+ req.body.id+'","'+ req.body.time+'","'+req.body.survey+'","'+req.body.question +'","'+req.body.answer+'","'+req.body.date+'")');
 const client = await pool.connect();
  var result = await client.query("INSERT INTO answer (id, time, survey, question, answer, date) VALUES ("+ req.body.id+",'"+ req.body.time+"','"+req.body.survey+"','"+req.body.question +"','"+req.body.answer+"','"+req.body.date+"')"
  );
  client.release();
  res.send('Success'); 
  });

 function is_expired(start_,end_){
  let start=hour_ref[start_];
  let end=hour_ref[end_];
  let date_ob = new Date();
  
  let hours = date_ob.getHours();

  //console.log(Time.zone.now );
  if(hours>=4){
    hours=hours-4
   }else{
     hours=24-(4-hours)
   } 
    if((hours>=start)&(hours<end)){
      return false;
    }else{
      return true;
    }
 }

function pading(num){
  var binaryStr = num.toString(2);
  while(binaryStr.length < 8) {
    binaryStr = "0" + binaryStr;
}
var str=binaryStr.split('');
return  str;
}

  function translate_ql(qlistJSON){
    let questionList=qlistJSON.split("_");
    let result = questionList.map(x => ql_ref[x]);
    let arrays = result.map(num => pading(num));
    var merged = [].concat.apply([], arrays);
    let x= merged.reduce(function(a, e, i) {
    if (e == 1)
        a.push(i+1);
    return a;}, []);
//console.log("sss",x);
    let resultx= x.map(el => 'Q' + el)
    return resultx;
}

  app.get('/survey/:id/:surveyname/:time/:qlist/:start/:end', async function(req, res){

    let surveyname_=survey_ref[req.params.surveyname];
    let time_=time_ref[req.params.time];
    let qlist_=translate_ql(req.params.qlist);
    console.log(qlist_);

     if (is_expired(req.params.start,req.params.end)) {
      res.render('pages/user_reported_survey1',{
        id:req.params.id,
       surveyname: req.params.surveyname
      });
     }else{

      let timeNow = new Date();
      timeNow=timeNow.toLocaleString('en-US', { timeZone: 'America/New_York' });
      timeNow=timeNow.split(",")[0];
      //time_="ss"
      console.log(id_ref[req.params.id]);
      console.log(timeNow);
       const client3= await pool.connect();
        var result3 = await client3.query("Select id from complete where id=" +"'" +  id_ref[req.params.id]+"'"   + "and survey="+"'" +  time_+"'" + " and question="+"'"+ qlist_ +"'"+"and date="+"'"+ timeNow+"'") ;
       client3.release();
      console.log(result3.rowCount);
      if(result3.rowCount>0){
        res.render('pages/user_reported_survey1',{
          id:req.params.id,
         surveyname: req.params.surveyname
        });
      }else{
      res.render('pages/survey',{
         id: id_ref[req.params.id],
        surveyname: surveyname_,
        time: time_,
        qlist:qlist_
       });
     }
    }  
  });


  app.get('/self-report-surveys/:id/:surveyname/:qlist', function(req, res){
    let surveyname_=survey_ref[req.params.surveyname];
    let qlist_=translate_ql(req.params.qlist);
    console.log(qlist_);
   res.render('pages/user_reported_survey2',{
        id: id_ref[req.params.id],
        surveyname: surveyname_,
        qlist:qlist_
       }); 
  });

  
  // app.get('/surveynew/:id',async (req,res)=>{
  //   const client2 = await pool.connect();
  //   var result2 = await client2.query('Select * from question where id='+req.params.id );
  //   client2.release();
  //   //console.log(result2.rows);
  //   //console.log(result2.rows[0]);
  //   //console.log(result2.rows[0].id);
  //   //res.send("s");

  //  if (is_expired(req.params.start,req.params.end)) {
  //      res.send('Sorry your link has expired');
  //      }else{
  //        res.render('pages/survey',{
  //          id: result2.rows[0].id,
  //          surveyname:  result2.rows[0].survey,
  //          time: result2.rows[0].time,
  //          qlist:  result2.rows[0].q_list
  //        });
  //      } 
  // });

  app.get('/test', (req, res) => 
  res.render('pages/test')
  )


  app.post('/test',async (req,res)=>{
     console.log(req.body);
     res.send({ "Success": "Email is already used." });

  });








app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
