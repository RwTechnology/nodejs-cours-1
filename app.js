const express = require('express')
const app = express()
const port = 3000

//ressource static
app.use(express.static('public'))

app.get('/accueil', function (req, res) {
  res.status(200).sendFile('IHM/accueil.html', {root: __dirname})
})

app.get('/', function (req, res) {
  res.status(300).sendFile("./IHM/accueil.html",{root: __dirname})
})

app.get('/profile', function (req, res) {
  res.status(200).sendFile("./IHM/profile.html",{root: __dirname})
})
app.use(function (req, res) {
  res.status(404).sendFile("./IHM/erreur.html",{root: __dirname})
})


app.listen(port, () => {
    console.log(`server listening on port ${port}`)
  })