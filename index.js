const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000



const app = express()
//app.set("view options", {layout: false});
app.use(express.static(path.join(__dirname, 'build'))); 
app.post('/', function(req, res) { res.sendFile(path.join(__dirname + '/build/index.html')); });



app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
