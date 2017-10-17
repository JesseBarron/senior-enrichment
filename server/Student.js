const api = require('express').Router();
const Student = require('../db/models').Student;
const Campus = require('../db/models').Campus;

//Get All Students....
api.get('/', (req, res) => {
	Student.findAll()
		.then(data => {
			// console.log(data);
			res.json(data);
		})
		.catch(err => console.log(err)); // Temporary error Handling
});

//Get Student by id NOTE I have to include information about the campus they belong to so i can get the name and image of the school (default should be earth)
api.get('/:studentId', (req, res) => {
	let studentId = req.params.studentId;

	Student.findById(studentId, {
		include: [{
			model: Campus
		}]
	})
		.then(student => {
			res.json(student);
		})
		.catch(err => console.log(err));
});

//Adding a student to a Campus.... Required fields in the body are name, email, and campus id all of which are going to be handled in the form
api.post('/', (req, res) => {
	let { name, email, campusId } = req.body;

	Student.create({
		name,
		email,
		campusId,
	})
		.then(newStudent => {
			res.json(newStudent);
		})
		.catch(err => {
			console.log(err);
		});
});

//Get Student
module.exports = api;
