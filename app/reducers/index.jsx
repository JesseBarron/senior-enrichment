import { combineReducers } from 'redux';
import campuses from './Campus';
import students from './Student';

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

export default combineReducers({
  campuses,
  students
});
