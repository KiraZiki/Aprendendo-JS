const express = require('express')
const app = express()

app.get('/teste/:var', function (req, res) {
  res.send(req.params.var)
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})