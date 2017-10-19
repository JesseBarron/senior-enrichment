const api = require('express').Router();
const Campus = require('../db/models').Campus;
const Student = require('../db/models').Student;

//Setting up campusId param
api.param('campusId', (req, res, next, campusId) => {
	Campus.findById(campusId)
		.then(campus => {
			if (!campus) throw new Error('Campus Not Found');
			req.selectedCampus = campus;
			next();
		})
		.catch(err => console.log(err));
})
//Get all the Campuses.
api.get('/', (req, res) => {
	Campus.findAll({include: [{model: Student}]})
		.then(campuses => {
			res.json(campuses);
		})
		.catch(err => console.log(err));
});

//Get specific campus by campus id, also returns all the students belonging to that school.
api.get('/:campusId', (req, res) => {
	
	req.selectedCampus.reload({
		include: [{
			model: Student,
			attributes:[ 'id', 'firstName', 'lastName', 'gpa' ]
		}]
	})
		.then(campus => {
			res.json(campus);
		})
		.catch(err => console.log(err));
});

//Add a new campust to the database
api.post('/', (req, res) => {
	Campus.create(req.body)
		.then(campus => {
			res.json(campus);
		})
		.catch(err => res.status(422).send(`${err.name} \n ${err.errors[0].message} on field ${err.fields.name}`));
});

//Update an existing campus
api.put('/:campusId', (req, res) => {
	req.selectedCampus.update(req.body)
		.then(campus => {
			res.json(campus);
		})
		.catch(err => console.log(err));
});

//Delete campus from database
api.delete('/:campusId', (req, res) => {
	req.selectedCampus.destroy()
		.then(() => {
			res.status(200).send('Campus deleted!');
		})
		.catch(err => console.log(err));
});

module.exports = api;
