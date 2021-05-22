const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
app.use(cors());

const morgan = require('morgan');
app.use(morgan('tiny'));

const proxy = require('express-http-proxy');
app.use('/', proxy('https://api.binance.com'));

app.listen(port, () => {
    console.log('Listening on' + port);
});
