import React, { Component } from 'react';
import StudentList from './StudentList';
import { NavLink } from 'react-router-dom';

const CampusList = ({ campuses, students }) => {
  return (
    <div className='campusList'>
      {
        campuses.map(campus => {
          if(campus.students.length) {
            return (
              <div key={campus.id} style={{backgroundImage: `url(${campus.image})` }}>
                  <h5><NavLink to={`/campuses/${campus.id}`}> {campus.name.toUpperCase()}'s </NavLink> Honered Students! </h5>
                <hr/>
                <StudentList campusId={campus.id} />
              </div>
            );
          }
        })
      }
    </div>
  )
}

export default CampusList;