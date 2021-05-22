const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));

const morgan = require('morgan');
app.use(morgan('tiny'));

const proxy = require('express-http-proxy');
app.use('/', proxy('https://api.binance.com'));

app.listen(port, () => {
    console.log('Listening on' + port);
});
