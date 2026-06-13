const express = require('express');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Slack Bot API!' });
});

app.use("/slack", routes);

module.exports = app;