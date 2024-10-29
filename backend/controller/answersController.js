const Answer = require('../models/answersModel');
const Question = require('../models/questionModel');

const answersController = {
    createAnswers: async(req, res) => {
        try{
            const question = await Question.findByPk(id);
            if (!question) {
                return res.status(404).json({ error: 'Question not found' });
            }

            const answer = new Answer({
                answer: req.body.answer,
                response_id: req.body.response_id,
                question_id: req.body.question_id
            })

            const newAnswer = await answer.create();
            res.status(200).json("Thêm thành công!", newAnswer);
        }
        catch(err)
        {
            res.status(500).json({ err: err.message });
        }
    },


};

module.exports = answersController;