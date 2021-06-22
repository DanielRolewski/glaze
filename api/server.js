const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('<h1>Test Server</h1>');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
