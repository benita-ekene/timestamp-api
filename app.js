const express = require('express');
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());


// app.get("/api/:date", (req, res) => {
//   req.params.unix = Date.now().toString();
//   req.params.utc = new Date().toString();
//   res.json({unix: req.params.unix, utc: req.params.utc})
// })

app.get('/api/:date?', (req, res) => {
  try {
    const dateString = req.params.date || '';
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      throw new Error('Invalid Date');
    }

    const response = {
      unix: date.getTime(),
      utc: date.toUTCString(),
    };

    res.json(response);
  } catch (error) {
    console.error(error); // Log errors for debugging
    res.status(400).json({ error: 'Invalid Date' });
  }
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
