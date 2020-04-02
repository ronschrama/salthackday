const express = require('express');

const app = express();

app.get('/express_backend', (req, res) => {
  res.send({ express: 'This is the express backend that is connected to react'})
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running and listening on port ${port}`));