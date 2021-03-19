//---------------------------------------------------------
//Create a server
var http = require('http');
//Event Emitter
var events = require('events');
var eventEmitter = new events.EventEmitter();

var server = http.createServer(function(req, res){
    //Event  Trigger
    eventEmitter.emit("CallListnerEvent", "Test Event Listner");
    res.end("Server Works !!!");
});

server.listen(3000, 'localhost', function(){
    console.log("Server is listening at port : 3000");
});

//Event Listner
eventEmitter.on("CallListnerEvent", function(data){
    console.log("A request to raise event has been done.", data);
});
//---------------------------------------------------------

