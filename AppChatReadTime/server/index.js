var express = require('express');
var app = express();

var server = require('http').createServer(app);

const io = require('socket.io')(server)

app.get('/', (req, res, ext)=> {
    res.sendFile(__dirname+'/public/index.html')
});

app.use(express.static('public'));

io.on('connection', (client)=> {
    console.log('Client connected...');
});

server.listen('3000', () => {
    console.log("app listen port 3000")
});