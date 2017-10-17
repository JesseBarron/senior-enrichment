'use strict';

const db = require('../');
const DataType = db.Sequelize;

const Campus = db.define('campus', {
	name: {
		type: DataType.STRING,
		allowNull: false
	},
	image: {
		type: DataType.STRING
	},
});

module.exports = Campus;
