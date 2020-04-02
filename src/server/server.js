const express = require('express');
const apiRouter = require('./routes.js');

const app = express();

app.use(express.static('dist'));
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(process.env.PORT || 8081, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));