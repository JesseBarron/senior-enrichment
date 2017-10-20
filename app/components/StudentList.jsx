import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchAllStudents } from '../reducers/Student';

const StudentList = (props) => {
    const campusId = props.campusId;
    const students = props.students;
    const honored = props.honored;
    
    return (
      <ul className='studentList'>
        {
          students.map(student => {
            if(!campusId){
              return (
                <li key={student.id}>
                  <NavLink to={`/students/${student.id}`}>
                  <img src='https://i.pinimg.com/originals/8f/97/20/8f97200b0df00dc1bd89e4ddeb308ce2.jpg' alt='studentPic'/>
                  </NavLink>
                  <h4>{student.fullName}</h4>
                  <h4>{student.email}</h4>
                </li>  
              )
            }
            if(student.campusId == campusId && !honored){
              return (
                <li key={student.id}>
                  <NavLink to={`/students/${student.id}`}>
                  <img src='https://i.pinimg.com/originals/8f/97/20/8f97200b0df00dc1bd89e4ddeb308ce2.jpg' alt='studentPic'/>
                  </NavLink>
                  <p>{student.fullName}</p>
                  <p>{student.email}</p>
                </li>  
              )
            }
            else if(student.campusId === campusId && student.honored){
              for(var i = 0; i < 3; i++){
                return(
                  <li key={student.id}>
                    <NavLink to={`/students/${student.id}`}>
                    <img src='https://i.pinimg.com/originals/8f/97/20/8f97200b0df00dc1bd89e4ddeb308ce2.jpg' alt='studentPic'/>  
                    </NavLink>
                    <p>
                      {student.fullName} <br/>
                      {student.email}
                    </p>
                    <p>GPA: {student.gpa} </p>
                    <hr/>
                  </li>
                )
              }
            }
          })
        }
      </ul>
    );
}


export default StudentList;