var events = require('events');
var eventEmitter = new events.EventEmitter();

var ringBell = function()
{
    console.log('Ring Ring Ring');
}

eventEmitter.on('doorOpen', ringBell);

eventEmitter.emit('doorOpen');