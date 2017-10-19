'use strict';

const db = require('../');
const DataType = db.Sequelize;

const Student = db.define('student', {
	firstName: {
		type: DataType.STRING,
		allowNull: false
	},
	lastName: {
		type: DataType.STRING,
		allowNull: false
	},
	email: {
		type: DataType.STRING,
		allowNull: false,
		unique: true
	},
	gpa: {
		type: DataType.FLOAT,
		defaultValue: 2.4,
		validate: {
			min: 0,
			max: 4
		}
	},
	campusId: {
		type: DataType.INTEGER,
		defaultValue: 1
	}
}, 
{
	getterMethods: {
		fullName() {
			return this.firstName + ' ' + this.lastName;
		},
		honored(){
			return this.gpa >= 3.5;
		}
	}
});

module.exports = Student;
