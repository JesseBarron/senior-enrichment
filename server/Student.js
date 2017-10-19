const api = require('express').Router();
const Student = require('../db/models').Student;
const Campus = require('../db/models').Campus;

//Setup studentId parameter
//This is basically saying whenever studentId is being entered in the address
//bar set req.selectedStudent to the instance retrieved from the database
//using that very studentId......
api.param('studentId', (req, res, next, studentId) => {
	Student.findById(studentId)
		.then(student => {
			if (!student) throw new Error('Student not Found!');
			req.selectedStudent = student;
			next();
		})
		.catch(err => console.log(err));
});

//Get All Students....
api.get('/', (req, res) => {
	Student.findAll({include: [{model: Campus}]})
		.then(data => {
			res.json(data);
		})
		.catch(err => console.log(err)); // Temporary error Handling
});

//Get Student by id NOTE I have to include information about the campus they belong to so i can get the name and image of the school (default should be earth)
api.get('/:studentId', (req, res) => {
	req.selectedStudent.reload({
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
	Student.create(req.body)
		.then(newStudent => {
			res.json(newStudent);
		})
		.catch(err => {
			console.log(err);
		});
});

//Updating Student Information.
api.put('/:studentId', (req, res) => {
	req.selectedStudent.update(req.body)
		.then(updatedUser => {
			res.json(updatedUser);
		});
});

api.delete('/:studentId', (req, res) => {
	req.selectedStudent.destroy()
		.then(data => {
			console.log(`Student${data} deleted`);
			res.status(202).end();
		})
})
module.exports = api;
