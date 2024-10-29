const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Form = require('./formModel');

const Question = sequelize.define('questions', {
    question_text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    question_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    form_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Form,
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
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
    tableName: 'questions'
});

Question.associate = (models) => {
    Question.belongsTo(models.Form, {
        foreignKey: 'form_id',
        as: 'form',
    });
    Question.hasMany(models.Answer, {
        foreignKey: 'question_id',
        as: 'answers',
    });
};

module.exports = Question;
