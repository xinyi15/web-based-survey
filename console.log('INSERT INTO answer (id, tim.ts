console.log('INSERT INTO answer (id, time, survey, question, answer, date) VALUES ("'+ req.body.id+'","'+ req.body.time+'","'+req.body.survey+'","'+req.body.question +'","'+req.body.answer+'","'+req.body.date+'")');
const client = await pool.connect();
 var result = await client.query("INSERT INTO answer (id, time, survey, question, answer, date) VALUES ("+ req.body.id+",'"+ req.body.time+"','"+req.body.survey+"','"+req.body.question +"','"+req.body.answer+"','"+req.body.date+"')"
 );
 client.release();

 let personInfo = req.body;

 if (!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf) {
   res.send();
 } else {
   if (personInfo.password == personInfo.passwordConf) {

     User.findOne({ email: personInfo.email }, (err, data) => {
       if (!data) {
         let c;
         User.findOne({}, (err, data) => {

           if (data) {
             c = data.unique_id + 1;
           } else {
             c = 1;
           }

           let newPerson = new User({
             unique_id: c,
             email: personInfo.email,
             username: personInfo.username,
             password: personInfo.password,
             passwordConf: personInfo.passwordConf
           });

           newPerson.save((err, Person) => {
             if (err)
               console.log(err);
             else
               console.log('Success');
           });

         }).sort({ _id: -1 }).limit(1);
         res.send({ "Success": "You are regestered,You can login now." });
       } else {
         res.send({ "Success": "Email is already used." });
       }

     });
   } else {
     res.send({ "Success": "password is not matched" });
   }
 }