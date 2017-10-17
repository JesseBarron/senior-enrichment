const api = require('express').Router();
const Campus = require('../db/models').Campus;
const Student = require('../db/models').Student;

//Get all the Campuses.
api.get('/', (req, res) => {
	Campus.findAll()
		.then(campuses => {
			res.json(campuses);
		})
		.catch(err => console.log(err));
});

//Get specific campus by campus id, also returns all the students belonging to that school.
api.get('/:campusId', (req, res) => {
	let campusId = req.params.campusId;
	Campus.findById(campusId, {
		include: [{
			model: Student
		}]
	})
		.then(campus => {
			res.json(campus);
		});
});

module.exports = api;
