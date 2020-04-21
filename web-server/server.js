const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const logger = require('morgan');

app.use(logger('dev'));

app.use('/css',express.static(path.resolve('web-client/src/css/')));
app.use('/js',express.static(path.resolve('web-client/src/js/')));
app.use('/img',express.static(path.resolve('web-client/src/img/')));
app.use('/site.webmanifest',express.static(path.resolve('web-client/src/site.webmanifest')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('web-client/src/index.html'));
});

app.use('/',express.static(path.resolve('web-client/src/')));

app.listen(port, () => {    
    console.log('server running on port ' + port);
});