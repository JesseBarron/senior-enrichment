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
  {name: 'Jesse', email: "Jesse@MHIA.com", campusId: 1},
  {name: 'Mayra', email: "Mayra@MHIA.com", campusId: 2},
  {name: 'Alex', email: "Alex@MHIA.com", campusId: 3},
  {name: 'Benjamin', email: "Benjamin@MHIA.com", campusId: 3},
  {name: 'Buzz', email: "Buzz@MHIA.com", campusId: 3},
  {name: 'Neil', email: "Neil@MHIA.com", campusId: 2},
];

const campusArr = [
  {name: "earth", image: imageUrls.earth},
  {name: "mars", image: imageUrls.mars},
  {name: "pluto", image: imageUrls.pluto}
];


const seedDB = async () => {
  try{
    await Campus.bulkCreate(campusArr);
    console.log('Seeded Campus')
    await Student.bulkCreate(studentArr);
    console.log('Seeded Students')
    return 'Seeding Complete';
  }
  catch(err){
    console.log(err)
  }
}

seedDB();
