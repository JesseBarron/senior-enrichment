import axios from 'axios';


//Actions
const GET_CAMPUS = 'GET_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';


//Action Creators
export const getCampus = (campus) => {
  return {
    type: GET_CAMPUS,
    campus
  }
}

export const updatedCampus = (updatedCampus) => {
  return {
    type: UPDATE_CAMPUS,
    updatedCampus
  }
}

//reducers 
const reducers = {
  GET_CAMPUS: (state, action) => {
    return action.campus
  },
  UPDATE_CAMPUS: (state, action) => {
    return action.campus
  }
}

export default function reducer(state = {}, action) {
  if(reducers[action.type]) return reducers[action.type](state, action);
  return state;
};

//Thunks

export const fetchCampus = (id) => (dispatch) => {
  axios.get(`/api/campuses/${id}`)
  .then(res => res.data)
  .then(campus => {
    let action = getCampus(campus);
    dispatch(action);
  })
}

export const updateCampus = (id, updatedData, match) => (dispatch) => {
  axios.put(`/api/campuses/${id}`, updatedData)
  .then(res => res.data)
  .then(updatedCampus => {
    let action = updateCampus(updatedCampus);
    dispatch(action);
  })
}