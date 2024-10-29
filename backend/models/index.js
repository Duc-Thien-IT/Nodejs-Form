const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);

const Form = require('./formModel')(sequelize, Sequelize.DataTypes);
const Question = require('./questionModel')(sequelize, Sequelize.DataTypes);
const Answer = require('./answersModel')(sequelize, Sequelize.DataTypes);
const Response = require('./responseModel')(sequelize, Sequelize.DataTypes);
const associateModels = require('./associations');

// Set up associations
associateModels();

module.exports = {
    sequelize,
    Form,
    Question,
    Answer,
    Response,
};
