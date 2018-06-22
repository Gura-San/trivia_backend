const express = require('express')

const app = express()

app.set('port', process.env.PORT || 4000)

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.listen(app.get('port'), _ => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})