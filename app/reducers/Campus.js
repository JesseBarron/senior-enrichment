import axios from 'axios';

//Actions ----------------------------->

const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const POST_CAMPUS = 'POST_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';


//Action Creator -------------------------->

export const getAllCampuses = (campuses) => {
  return {
    type: GET_ALL_CAMPUSES,
    campuses
  }
};

//Reducer ------------------------------>
const reducers = {
  GET_ALL_CAMPUSES: (state, action) => {
    return action.campuses;
  },
};

export default function reducer(state = [], action) {
  if(reducers[action.type]) return reducers[action.type](state, action);
  return state;
};

//Thunks ------>
export const fetchAllCampuses = () => (dispatch) => {
  axios.get('/api/campuses')
  .then(res => res.data)
  .then(campuses => {
    let action = getAllCampuses(campuses);
    dispatch(action);
  })
};