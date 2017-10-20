import React,{ Component } from 'react';
import { connect } from 'react-redux';

const StudentProfile = (props) => {
  return (
    <div>
      <h1>Student Profile Goes here</h1>
      
    </div>
  );
}

const mapState = (state) => {
  return {

  }
}
const mapDispatch = (dispatch) => {
  return {

  }
}
export default connect(mapState, mapDispatch)(StudentProfile);