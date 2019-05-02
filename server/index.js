const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

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

//app.post('/')

const port = process.env.port || 1234;
app.listen(port, (req, res) => {
    console.log('Server is running on port: ' + port);
});