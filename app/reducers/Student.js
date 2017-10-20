import axios from 'axios';


//ACTIONS ------------------------->
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const POST_STUDENT = 'POST_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

//ACTION CREATORS ----------------->
export const getAllStudents = (students) => {
 return{
  type: GET_ALL_STUDENTS, 
  students
 } 
};

export const postStudent = (student) => {
  return {
    type: POST_STUDENT,
    student
  }
}

//REDUCER ------------------------->
const reducerFuncs = {
  GET_ALL_STUDENTS: (state, action) => {
    return action.students;
  },
  POST_STUDENT: (state, action) => {
    return [...state, action.student];
  }
}

export default function reducer(state = [], action){
  if(reducerFuncs[action.type]) return reducerFuncs[action.type](state, action);
  return state;
};

//THUNKS -------------------------->
export const fetchAllStudents = () => (dispatch) =>{
  axios.get('/api/students')
  .then(res => res.data)
  .then(students => {
    let action = getAllStudents(students)
    dispatch(action);
  });
}

export const postStudentToDB = (student) => (dispatch) => {
  axios.post('/api/students', student)
  .then(res => res.data)
  .then(newStudent => {
    let action = postStudent(newStudent);
    dispatch(action);
  })
}  