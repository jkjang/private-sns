const express = require('express');
const path = require('path');
// const routes = require('./routes');

const app = express();

// app.use(routes);
app.use(express.static(path.resolve('../../front-end/build')));

app.listen(8080, () => {
    console.log('Sever is listening to port 4000!');
})