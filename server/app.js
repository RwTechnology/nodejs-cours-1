const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.status(200).sendFile("../IHM/accueil.html",{root: __dirname})
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
  })

  // app.get('/', function (req, res) {
  //   res.status(200).sendFile("../IHM/accueil.html",{root: __dirname})
  // })