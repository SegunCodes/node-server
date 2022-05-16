var http = require('http');
var events = require('events');

var eventEmitter = new events.EventEmitter();

var server = http.createServer(function(req, res){
    eventEmitter.emit('Someone requested', 'TEST');//Event trigger
    res.end('Server Works');
});

eventEmitter.on('Someone requested', function(data){
    console.log('A request has been done on the server', data);
}); //Event Listener

server.listen(3000, 'localhost', function(){
    console.log('Server started on port 3000')
})