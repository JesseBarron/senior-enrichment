import React, { Component } from 'react';
import StudentList from '../StudentList';
import PostStudentForm from './PostStudentForm';
import { connect } from 'react-redux';
import { fetchAllStudents } from '../../reducers/Student'

class Students extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.fetchStudets()
  }
  render(){
    return (
      <div>
        <h1>These are all the students!</h1>
        <PostStudentForm />
        <div className='studentsListContainer'>
          <StudentList students={this.props.students}/>
        </div>
      </div>
    );
  }
}
const mapState = ({students}) => {
  return {
    students
  }
}
const mapDispatch = (dispatch) => {
  return{
    fetchStudets: () => {
      dispatch(fetchAllStudents())
    }
  }
} 
export default connect(mapState, mapDispatch)(Students);