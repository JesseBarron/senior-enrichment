'use strict';
const db = require('../');
const randomImage = require('./utility/planetimages');

const DataType = db.Sequelize;

const Campus = db.define('campus', {
	name: {
		type: DataType.STRING,
		allowNull: false,
		unique: true
	},
	image: {
		type: DataType.STRING,
		isUrl: true,
		defaultValue: randomImage(), //sets to random image if no image is given... 
	},
});

module.exports = Campus;
// set() only trigger if there's a value put here.
