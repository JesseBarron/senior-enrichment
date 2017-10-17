const api = require('express').Router();
// const db = require('../db');
const Campus = require('./Campus');
const Student = require('./Student');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.use('/campuses', Campus);
api.use('/students', Student);
api.get('/hello', (req, res) => res.send({hello: 'world'}));

module.exports = api;
