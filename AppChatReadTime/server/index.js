var express = require('express');
var cors = require('cors')

var app = express();
app.use(cors())
app.use(express.static('public'));

var server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
})

io.on('connection', (client) => {
    console.log('Client connected...');
    client.on('test', data=>{
        client.emit('newMessage', 'Tao la server guiwr cho m client');
        console.log(data);
    })
});

server.listen('3000', () => {
    console.log("app listen port 3000")
});