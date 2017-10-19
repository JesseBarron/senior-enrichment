"use strict";

const db = require('../db');
const models = require('../db/models');
const Student = models.Student;
const Campus = models.Campus;

const imageUrls = {
  earth: 'https://concordiaabchao.files.wordpress.com/2016/05/roundearth.jpg',
  mars: 'https://mars.nasa.gov/images/mars-globe-valles-marineris-enhanced.jpg',
  pluto: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Pluto-01_Stern_03_Pluto_Color_TXT.jpg'
}

const studentArr = [
  {firstName: 'Jesse', lastName: 'B',email: "Jesse@MHIA.com", gpa: 3.0, campusId: 1},
  {firstName: 'Mayra', lastName: 'M',email: "Mayra@MHIA.com", gpa: 3.3, campusId: 2},
  {firstName: 'Alex', lastName: 'B',email: "Alex@MHIA.com", gpa: 3.5, campusId: 3},
  {firstName: 'Benjamin', lastName: 'B',email: "Benjamin@MHIA.com", gpa: 3., campusId: 3},
  {firstName: 'Buzz', lastName: 'A',email: "Buzz@MHIA.com", gpa: 3.6, campusId: 3},
  {firstName: 'Neil', lastName: 'A',email: "Neil@MHIA.com", gpa: 3.9, campusId: 2},
];

const campusArr = [
  {name: "earth"},
  {name: "mars", image: imageUrls.mars},
  {name: "pluto"}
];


const seedDB = async () => {
  try{
    await Campus.bulkCreate(campusArr);
    console.log('Seeded Campus')
    await Student.bulkCreate(studentArr);
    console.log('Seeded Students')
  }
  catch(err){
    console.log(err)
  }
  return "Seeding Complete"
}

seedDB();
