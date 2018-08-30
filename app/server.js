const express = require('express');
app = express();

app.get('/', (req, res) => {
  res.send('Hello how are you?');
});

app.listen('9091', () => {
  console.log('server listening at 9091');
});
