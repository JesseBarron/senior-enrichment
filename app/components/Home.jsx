import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllCampuses } from '../reducers/Campus';
const styling = {
  coverPicture: {
    position: 'absolute',
    width: '100vw',
    zIndex: -2,
  },

  coverContainer: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '11vh',
    margin: '0 auto',
    width: '100vw',
    top: '21.3vh'
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
      coverImg: 'http://space.airbus.com/wp-content/uploads/2016/09/earth-view-from-satellite-space-systems-cover.jpg'
    }
  };

  componentDidMount(){
    this.props.fetchAllCampuses();
  }

  render() {
    return (
      <div className='homeMain'>
        <div className='coverContainer' style={styling.coverContainer}>
          <img id="coverPicture" src={this.state.coverImg} style={styling.coverPicture} />
          <div id='coverBio' style={styling.coverBio}>
            <h2>Some Space codeSchool!</h2>
            <p style={styling.text}>
              dkfa;dslkjfa;sldjf;asldjfajsd;fa;sdkjfa;sldkjfas;dkjf <br />
              jfaklsdfja;sldjfalskdjf;alskdjflaskdjfalsdjfalkdsfjfals;ddfjaklsdfjasdfja;sdjf
            </p>
          </div>
        </div>
      </div>
    );
  }
}
const mapState = ({ campuses }) => {
  return {
    campuses
  }
};

const mapProps = (dispatch) => {
  return {
    fetchAllCampuses(){
      dispatch(fetchAllCampuses())
    }
  }
};

export default connect(mapState, mapProps)(Home);