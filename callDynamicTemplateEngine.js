var express = require('express');
var path = require('path');
var app = express();
const port = 8000;

//to set view engine
app.set("view engine", "hbs");
   
//template engine route
app.get('', function (req, res){  
    res.render('index.hbs');
});

//http://localhost:8000/ChangeText
app.get('/ChangeText', function (req, res){  
    res.render('index.hbs', { changeTextDynamic: "Prasad Kulkarni" });
});

//Invalid routes -Error handler
app.get('*', function (req, res){  
    res.render('404Error.hbs', { errorComment: "Invalid route entered" });
});

app.listen(port, ()=>{
    console.log("Server is listening at 8000");
});