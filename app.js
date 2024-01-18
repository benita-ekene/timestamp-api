const express = require('express');
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());


app.get('/api/:date?', (req, res) => {
  const inputDate = req.params.date;

  let dateObject;
  if (!inputDate) {
    dateObject = new Date();
  } else {
    dateObject = new Date(inputDate);
  }

  if (isNaN(dateObject.getTime())) {
    res.json({ error: 'Invalid Date' });
  } else {
    res.json({
      unix: dateObject.getTime(),
      utc: dateObject.toUTCString(),
    });
  }
});

// app.get("/api/:date", (req, res) => {
//   req.time = Date.now().toString();
//   req.timeNow = new Date().toString();
//   res.json({unix: req.time, utc: req.timeNow})
// })

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
