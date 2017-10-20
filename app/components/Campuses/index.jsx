import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampusList from '../CampusList'
import PostCampusForm from './PostCampusForm';
import { fetchAllCampuses } from '../../reducers/Campus';
import { fetchAllStudents } from '../../reducers/Student';


class Campuses extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
   this.props.fetchData()
  }

  render() {
    return (
      <div>
        <h1>This is Campuses</h1>
        <PostCampusForm />
        <CampusList campuses={this.props.campuses} students={this.props.students} honored={ false } />
      </div>
    );
  }
}

const mapState = ({ campuses, students }) => {
  return {
    campuses,
    students,
  }
}

const mapProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(fetchAllCampuses());
      dispatch(fetchAllStudents());
    },
  }
}
export default connect(mapState, mapProps)(Campuses);