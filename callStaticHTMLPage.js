var express = require('express');
var path = require('path');
var app = express();
const port = 8000;

const staticPath = path.join(__dirname, "./StaticHTMLPages");

//built in middlewear
app.use(express.static(staticPath));

app.listen(port, ()=>{
    console.log("Server is listening at 8000");
});