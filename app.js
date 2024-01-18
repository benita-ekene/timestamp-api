const express = require('express');
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());


app.get("/api/:date", (req, res) => {
  req.params.unix = Date.now().toString();
  req.params.utc = new Date().toString();
  res.json({unix: req.params.unix, utc: req.params.utc})
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
