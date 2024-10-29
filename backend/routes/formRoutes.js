const express = require('express');
const formController = require('../controller/formController');
const questionController = require('../controller/questionController');
const answersController = require('../controller/answersController');
const router = express.Router();

/** 
 * @swagger
 * /v1/form:
 *   post:
 *     summary: Create new form
 *     description: Create a new form with questions and answers.
 *     tags: [formRoutes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               questions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     question_text:
 *                       type: string
 *                     question_type:
 *                       type: string
 *                       enum: [text, number, multiple_choice]
 *                     answers:
 *                       type: array
 *                       items:
 *                         type: string
 *     responses:
 *       201:
 *         description: Create form successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Create form failed
 */
router.post('/form', formController.createFormWithQuestions);

/**
 * @swagger
 * /v1/form/{id}:
 *   get:
 *     summary: Get form by ID
 *     description: Retrieve a form and its associated questions and answers.
 *     tags: [formRoutes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the form to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved form
 *       404:
 *         description: Form not found
 *       500:
 *         description: Server error
 */
router.get('/form/:id', formController.getFormById);

router.post('/createForm', formController.createForm);
router.post('/createQuestion', questionController.createQuestion);
router.post('/createAnswers', answersController.createAnswers);

module.exports = router;