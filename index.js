const express   = require('express')
const questions = require('./controllers/questionnaireController')

const app = express()

app.set('port', process.env.PORT || 4000)

app.use('/', questions)

app.listen(app.get('port'), _ => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})