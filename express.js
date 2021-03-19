//3rd Party Modules - Express
//Install Express - npm install express
var express = require('express');
//var http = require('http');
var app = express();
var fs = require('fs');

const chalk = require('chalk');

var app  = express();
//var server = http.createServer(app);

app.get('/', function(req, res){
   res.send('<h1>Express Works</h1>'); 
});

app.get('/tasks', function(req, res){
   fs.readFile('./db.json', function (err, data){
      var task = JSON.parse(data.toString()).tasks;
      res.send(task);
   });
});

 app.listen(3001, function(){
    console.log('Server is listening to port : 3001');
 });