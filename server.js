const express = require('express')
const app = express()
const port = process.env.port || 8000
const {tea, samosa} = require('./database/tea');

app.get('/', function (req, res) {
  res.json({msg:"hello from FulltimeDEV api"})
})
app.get('/getTea', function (req, res) {
  res.json({data:tea})
})
app.get('/makesamosa', function (req, res) {
  res.json({data:samosa})
})

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});