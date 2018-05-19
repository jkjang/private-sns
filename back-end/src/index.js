const express = require('express');
const path = require('path');
// const renderer = require('./renderer');
const app = express();

// app.get('*', renderer);
app.use('/', express.static(path.resolve('../../front-end/build')));
// app.use(render);

app.listen(4000, () => {
    console.log('Listening on port 8080');
});
