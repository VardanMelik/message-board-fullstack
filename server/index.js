const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const messages = require('./db/messages')


const app = express();

// Morgan package for logger needs
app.use(morgan('tiny'));
app.use(cors());

//Body Parser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Full Stack Message Board!'
    });
});

app.get('/messages', (req, res) => {
    messages.getAll().then((messages) => {
        res.json(messages);
    });
});

app.post('/messages', (req, res) => {
    console.log(req.body);
    messages.create(req.body).then((message) => {
        res.json(message);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});


const port = process.env.port || 1234;
app.listen(port, (req, res) => {
    console.log('Server is running on port: ' + port);
});