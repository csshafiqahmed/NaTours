const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ messgae: 'Hello from the server side', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.status(200).send('You can post to this end point');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
