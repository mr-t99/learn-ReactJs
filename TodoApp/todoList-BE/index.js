const express = require('express');
const app = express();
var cors = require('cors');
require('dotenv').config()

const handingjson = require('./handingtxt');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

app.get('/conten', (req, res) => {
    res.send(handingjson.readFile())
})

app.post('/conten', (req, res) => {
    handingjson.addItem(req, res);
})

app.listen('3000', () => {
    console.log('app listen port 3000');
})