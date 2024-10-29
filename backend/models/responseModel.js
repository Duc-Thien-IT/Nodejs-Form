const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Form = require('./formModel');

const Response = sequelize.define('responses', {
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
    tableName: 'responses'
});

module.exports = Response;
