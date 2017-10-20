import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StudentList from './StudentList';


const CampusList = (props) => {
    return (
      <div className='campusList'>
        {
          props.campuses.map(campus => {
            if(props.honored) {
              return (
                <div key={campus.id} id='campusDiv'>
                    <h4><Link to={`/campuses/${campus.id}`}> {campus.name.toUpperCase()} </Link></h4>
                  <hr/>
                  <StudentList students={props.students} honored={ props.honored } campusId={campus.id} />
                </div>
              );
            }
            else {
              return (
                <div key={campus.id} id='campusDiv'>
                    <h4><Link to={`/campuses/${campus.id}`}> {campus.name.toUpperCase()}</Link></h4>
                  <hr/>
                  <StudentList students={props.students} honored={ props.honored } campusId={campus.id} />
                </div>
              )
            }
          })
        }
      </div>
    )
}

export default CampusList;