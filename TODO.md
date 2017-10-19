# **Senior Enrichment Project** // October, 2017 // Things Todo
  Here are a few of the things that still need to be taken care of for my senior enricment project.
   # Backend:
  ## **Models:**
   - Student:
      - email:
          - **Required**
          - ~~Must be unique~~
          - Must be in email(Use email form in our front end)
      - ~~name~~:
        - **Required**
        - ~~virtual field for full name.~~
      - ~~GPA: should be a number between one and 4~~
        - **Required**
      - ~~Must belongTo campus~~ 
    - Campus
      - ~~name:~~
        - **Required**
        - **Yes I will**not sure if I'm going to give users the liberty of writing in their own names but we'll see, I can simply build some kind of api that generates a random planetary image for me when a name isn't mathced...
       - ~~Image~~:
          - **Required**
          - is also need for me to do some front end goodness, I can make this happen by making a hook or setter that will allow me to set the planet image on my database.
          **Perhaps before validation?** 
      ---
  ## **Routes:**
 > Our routes have to serve a couple of purposes. The three major responsibilities are, **getting, adding, deleting, and updating** our student and campus tables on our database. 

> In addition our backend router will aslo handle some of the cases where the user would want to see a certain page like "/students" or "/campuses" for a list of students and campuses...

- ## ~~Student Routes:~~ 
  - ~~**get all students**~~
    - app.get'/api/students'
  - ~~**get single student by that students id**~~
    - app.get'/api/:studentId'
  - ~~**post new student with a campus id**~~
    - app.post'/api/students'
      - This should clear all the field validations as well as have a campus assigned to it. The campus will be determined by a selector which will get all of our campuses form the db
  - **put(update) a single student's information REVIEW**
    - app.put'/api/:studentId'
      - This should update a students information like email, name, campusId... If any fields are left blank or untouched, the appropriate values should be destructured in the front end before being sent with the request
- ## ~~Campus Routes:~~
  - ~~**GET all campus**~~
    - app.get'/api/campuses'
      - this path should respond with all the campuses and all the associated student names associated with them.
  - ~~**GET single campus**~~
    - app.get'/api/:campusId'
      - Responds with a signle campus with all associated students.
  - ~~**POST new campus**~~
    - app.post'/api/campuses'
      - Adds a new campus to our database
  - ~~**UPDATE an existing campus?**~~
    - app.put'/api/:campusId'
      - Updates a campuses name?
  - ~~**DELETE campus**~~
    - app.delete'/api/:campusId'
      - Delete a campus form our database. This should cascade all the students belonging to that campus, the default campusId value for students will be one for Earth...
    ## Browser Routes:
    >These Routes are the special cases where the user might want to type in a route directly into the address bar to go to a certain page
      - '/students/' *note* there is no api prepend here, this route will render the students page directly.
      - '/campuses/' This route will render the campuses page.

# FrontEnd:
 ## **Views**: 
  - **Home**
    - Cover/Intro
      - uses nasa's api to fetch a nice background image.
    - Campuses
      - Displays a few campuses in some kind of slide-show like effect
    - Students
      - Spotlight some note worthy students(determined by the honored virtual field on the database, which is determined by the true field of gpa in the model) **Limit: 10  one studen per random campus** 
    - Footer information
      - Not sure what to put in the end here. Maybe some disclaimer for whatever dangers going to a new planet entails.
  - **Campuses**
    - About paragraph
      - Basic history of the institution(s)
    - Campus List
      - Campus unit
        >This is a representative of an individial campus. Should show the image of the actual planet(Dummy Images will be used!), how many students are attending that campus.. 
        - A small list of top 5 students should be added as well...
    - Footer
      - Idk same as the home.
  - **Students**
    - Students should be organized by planet.
    so babically there are planet sub-sections with a list of its attening students under them. should be collapsable..
  - **About**
    - Some background image with a small bio
  - **Contact**
    - meh.