import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampus } from '../reducers/selectedCampus';
import { fetchAllStudents } from '../reducers/selectedCampus';
import StudentList from './StudentList';
import UpdateCampus from './UpdateCampus';

class CampusProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
   this.props.getInitialData(this.props.match.params.id);
  }

  render() {
    let selectedCampus = this.props.selectedCampus;
    let campusName = selectedCampus.name 
    ? selectedCampus.name.toUpperCase()
    : selectedCampus.name;

    return (
      <div>
        <div className='campusProfileContainer'>
          <img id='campusProfileImg' src={selectedCampus.image} alt="Campus Image"/>
          <h1>{campusName}</h1>
        </div>
        <hr/>
        <UpdateCampus id={this.props.match.params.id} history={this.props} />
      </div>
    );
  }
}

const mapState = ({ selectedCampus }) => {
  return {
    selectedCampus,
  }
}
const mapDispatch = (dispatch, ownProps) => {
  return {
    getInitialData: (id) => {
      dispatch(fetchCampus(id));
    },
  }
}
export default connect(mapState, mapDispatch)(CampusProfile);