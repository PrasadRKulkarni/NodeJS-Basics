var express = require('express');
var app = express();

//To extract json from request body we need it.
app.use(express.json);

app.listen(8081, function(){
    console.log('Server is listening at port: 8081');
});

app.get('/', function(req,res){
    res.send("Hello Express");
    //res.render('index', {title : 'Hey', message : 'Hello there !' });
});

app.post('/', (req, res) =>{
    res.send("Post Request !!!");
});

app.get('/api/courses/:id', function(req, res){
    res.send(req.params.id);
});

const courses = [
    {id: 1, name: 'Course 1'},
    {id: 2, name: 'Course 2'},
    {id: 3, name: 'Course 3'}   
]
app.get('/api/lists/:id', function(req, res){
    const course = courses.find(c => c.id === parseInt(req.params.id));
    res.send(course);
});
