const Question = require('../models/questionModel');
const Form = require('../models/formModel');

const questionController = {
    createQuestion: async(req, res) => {
        try {
            const form = await Form.findByPk(id);
            if (!form) {
                return res.status(404).json({ error: 'Form not found' });
            }

            const question = new Question({
                question_text: req.body.question_text,
                question_type: req.body.question_type,
                form_id: req.body.form_id
            })

            const newQuestion = await question.create();
            res.status(200).json(newQuestion);
        } 
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

};

module.exports = questionController;