const mongoose = require('./connection')

const QuestionnaireSchema = new mongoose.Schema({

})

const Questionnaire = mongoose.model('Questionnaire', QuestionnaireSchema)

module.exports = Questionnaire