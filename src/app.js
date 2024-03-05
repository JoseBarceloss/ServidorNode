const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).json(
    { message: 'Aqui vai ficar sua API barcelos :) em HyperText Tranfrer Protocol (HTTP)' },
));

module.exports = app;