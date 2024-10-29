const Form = require('./formModel');
const Question = require('./questionModel');
const Answer = require('./answersModel');
const Response = require('./responseModel');

const associateModels = () => {
    Form.hasMany(Question, { foreignKey: 'form_id' });
    Question.belongsTo(Form, { foreignKey: 'form_id' });
    
    Question.hasMany(Answer, { foreignKey: 'question_id' });
    Answer.belongsTo(Question, { foreignKey: 'question_id' });
    
    Answer.belongsTo(Response, { foreignKey: 'response_id' });
};

module.exports = associateModels;
