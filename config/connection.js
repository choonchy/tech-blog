const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.JAWSDB_URL, {
	dialect: 'mysql',
	port: 3306,
});

module.exports = sequelize;
