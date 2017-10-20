import axios from 'axios';

//Actions ----------------------------->

const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const POST_CAMPUS = 'POST_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';


//Action Creator -------------------------->

export const getAllCampuses = (campuses) => {
  return {
    type: GET_ALL_CAMPUSES,
    campuses
  }
};

export const postCampus = (campus) => {
  return {
    type: POST_CAMPUS,
    campus
  }
}


//Reducer ------------------------------>
const reducers = {
  GET_ALL_CAMPUSES: (state, action) => {
    return action.campuses;
  },
  POST_CAMPUS: (state, action) => {
    return [action.campus, ...state];
  }
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

export const postCampusToDB = (newCampus) => (dispatch) => {
  axios.post(`/api/campuses`, newCampus)
  .then(res => res.data)
  .then(campus => {
    dispatch(postCampus(campus))
  })
}