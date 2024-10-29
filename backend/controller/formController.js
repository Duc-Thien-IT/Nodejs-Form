const Form = require('../models/formModel');
const Question = require('../models/questionModel');
const Answer = require('../models/answersModel');

const formController = {
    createForm: async (req, res) => {
        try {
            const form = new Form({
                title: req.body.title,
                description: req.body.description
            });
            const newForm = await form.save();
            res.status(200).json(newForm);
        } 
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    createFormWithQuestions: async (req, res) => {
        const { title, description, questions } = req.body;

        try {
            const form = await Form.create({ title, description });

            for (const question of questions) {
                const { question_text, question_type, answers } = question;

                const newQuestion = await Question.create({
                    question_text,
                    question_type,
                    form_id: form.id
                });

                if (answers && answers.length > 0) {
                    for (const answer of answers) {
                        //const isCorrect = answer === correct_answer;
                        await Answer.create({
                            answer,
                            //is_correct: isCorrect,
                            question_id: newQuestion.id
                        });
                    }
                }
            }

            res.status(201).json({ message: "Form created successfully", form });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getFormById: async (req, res) => {
        const { id } = req.params;

        try {
            const form = await Form.findByPk(id, {
                include: [{
                    model: Question,
                    include: [Answer] 
                }]
            });

            if (!form) {
                return res.status(404).json({ message: "Form not found" });
            }

            res.status(200).json(form);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

};

module.exports = formController;
