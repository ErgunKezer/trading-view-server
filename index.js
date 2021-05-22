const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const morgan = require('morgan');
const proxy = require('express-http-proxy');

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Authorization'],
    credentials: true,
};

app.use(morgan('tiny'));
app.use('/', cors(corsOptions), proxy('https://api.binance.com'));

app.listen(port, () => {
    console.log('Listening on' + port);
});
