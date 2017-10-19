import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllCampuses } from '../reducers/Campus';
import { fetchAllStudents } from '../reducers/Student';
import CampusList from './CampusList';
import StudentList from './StudentList';

const styling = {

  coverContainer: {
    display: 'flex',
    backgroundImage: 'url(http://space.airbus.com/wp-content/uploads/2016/09/earth-view-from-satellite-space-systems-cover.jpg)',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    width: '100vw',
    height: '50vh'
  },

  coverBio: {
    color: 'white',
    textShadow: '1px 1px black',
    padding: '3rem',
    textShadow: '1px 1px black',
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(196, 196, 196, 0.337)',
    border: '1px solid white'
  },
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coverImg: ''
    }
  };

  componentDidMount() {
    this.props.getInitialData();
  }

  render() {
    return (
      <div className='homeMain'>
      <div className="cover">
        <div className='coverContainer' style={styling.coverContainer}>
          <div id='coverBio' style={styling.coverBio}>
            <h2>Some Space codeSchool!</h2>
            <p style={styling.text}>
              This is going to be a small bio <br />
              Some more text here.........................
            </p>
          </div>
        </div>
      </div>
        <section className='campusListContainer'>
          <CampusList campuses={this.props.campuses} />
        </section>
        <section className="StudentListContainer">
          <StudentList students={this.props.students} />
        </section>
      </div>
    );
  }
}

{/* <img id="coverPicture" src={this.state.coverImg} style={styling.coverPicture} /> */}
const mapState = ({ campuses, students }) => {
  return {
    campuses,
    students
  }
};

const mapProps = (dispatch) => {
  return {
    getInitialData: ()  => {
      dispatch(fetchAllCampuses())
      dispatch(fetchAllStudents())
    },
  }
};

export default connect(mapState, mapProps)(Home);