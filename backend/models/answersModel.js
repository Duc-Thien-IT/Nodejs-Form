const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Response = require('./responseModel');
const Question = require('./questionModel');

const Answer = sequelize.define('answers', {
    answer: {
        type: DataTypes.TEXT,
    },
    response_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Response,
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    question_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Question,
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    // is_correct: { 
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: false,
    // },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    timestamps: false,
    tableName: 'answers'
});

Answer.associate = (models) => {
    Answer.belongsTo(models.Question, {
        foreignKey: 'question_id',
        as: 'question',
    });
    Answer.belongsTo(models.Response, {
        foreignKey: 'response_id',
        as: 'response',
    });
};

module.exports = Answer;
