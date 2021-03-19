//Core module of FS
//Read a file
var fs = require('fs');
fs.readFile('./Hello.txt', function(err, data){
    if(!err)
    {
        console.log(data.toString());
    }

});

//Write a file
fs.writeFile('./Hello.txt', 'Overwrite file testing !!!' , function(err){

});

//Read Write file 
fs.writeFile('./Sample.txt', 'How are you?' , function(err){
    if(!err)
    {
        fs.readFile('./Sample.txt', function(err, data){
            if(!err)
            {
                console.log(data.toString());
            }
        
        }); 
    }
});