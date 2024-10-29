const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Form = sequelize.define('forms', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
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
    tableName: 'forms'
});

module.exports = Form;
