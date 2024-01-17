const express = require('express');
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());


app.get("/", (req, res) => {
  req.time = new Date().now().toString();
  res.json({time: req.time})
})

app.listen(console.log(`server listening at port ${port}`))
