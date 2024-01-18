const express = require('express');
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());


app.get("/time", (req, res) => {
  req.time = new Date().toString();
  res.json({time: req.time})
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
