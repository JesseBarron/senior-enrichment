import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      coverImg: ''
    }
  };
  componentDidMount() {
    axios.get('/api/coverImage')
    .then(res => res.data)
    .then(coverImg => {
      this.setState({ coverImg });
    });
  }
  render() {
    return (
      <div className='homeMain'>
        <div className='coverContainer'>
        </div>
      </div>
    );
  }
}
{/* <img id="coverPicture" src={this.state.coverImg} /> */}