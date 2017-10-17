'use strict';

const db = require('../');
const DataType = db.Sequelize;

const Student = db.define('student', {
	name: {
		type: DataType.STRING,
		allowNull: false
	},
	email: {
		type: DataType.STRING,
		allowNull: false
	},
});

module.exports = Student;
