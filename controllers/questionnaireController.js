const Router        = require('express').Router()
const Questionnaire = require('../db/schema')
const request       = require('request-promise')

const URL = 'https://opentdb.com/api.php?amount=10'

Router.get('/questions', (req, res, error) => {
  request(URL)
    .then(data => {
        res.json(JSON.parse(data))
    })
})

module.exports = Router