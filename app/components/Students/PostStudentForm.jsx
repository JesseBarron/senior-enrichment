import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllCampuses } from '../../reducers/Campus';
import { postStudentToDB } from '../../reducers/Student';
import { Form, Col, FormControl, FormGroup, ControlLabel, Button, HelpBlock } from 'react-bootstrap';

class PostStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      campusId: null,
    }
    this.submitValidation = this.submitValidation.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleCampus = this.handleCampus.bind(this);
    this.isDisabled = this.isDisabled.bind(this)
  }

  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  handleFirstName(e) {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastName(e) {
    this.setState({
      lastName: e.target.value
    })
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleCampus(e) {
    this.setState({
      campusId: e.target.value
    })
  }

  isDisabled() {
    let {firstName, lastName, campusId } = this.state;
    if(firstName && lastName && campus){
      // console.log("Valid")
      return false;
    } else {
      // console.log("invalid");
      return true;
    }
  }
  
  submitValidation(e) {
    e.preventDefault();
    this.props.postStudent(this.state)
    
  }

  render() {
    return (
      <Form onSubmit={this.submitValidation}>
        <FormGroup controlId='firstName'>
          <Col componentClass={ControlLabel} sm={2}>
            First Name:
          </Col>
          <Col sm={4}>
            <FormControl
              type='text'
              placeholder='Enter First Name'
              onChange={this.handleFirstName}
            />
          </Col>

          <FormGroup controlId='lastName' >
            <Col componentClass={ControlLabel} sm={2}>
              Last Name:
            </Col>
            <Col sm={4}>
              <FormControl
                type='text'
                placeholder='Enter Last Name'
                onChange={this.handleLastName}
              />
            </Col>
          </FormGroup>
        </FormGroup>

        <FormGroup controlId='email'>
          <Col componentClass={ControlLabel} sm={2}>
            Email:
          </Col>
          <Col sm={4}>
            <FormControl
              type='email'
              placeholder='Enter Email Address'
              onChange={this.handleEmail}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="campus">
          <Col componentClass={ControlLabel} sm={1}>Campus</Col>
          <Col sm={5}>
            <FormControl componentClass="select" placeholder="select" onChange={this.handleCampus}>
              <option value={null}>select</option>
              {
                this.props.campuses.map(campus => {
                  return (
                    <option value={campus.id}>{campus.name.toUpperCase()}</option>
                  )
                })
              }
            </FormControl>
            <HelpBlock> All Fields Must be filled in order to submit </HelpBlock>
          </Col>
          <Button disabled={this.isDisabled()} type='submit'>
            Submit
        </Button>
        </FormGroup>
      </Form>
    );
  }
}

const mapState = ({ campuses }) => {
  return {
    campuses
  }
}

const mapDispatch = (dispatch) => {
  return {
    postStudent:(newStudent) => {
     dispatch(postStudentToDB(newStudent));
    },
    fetchAllCampuses: () => {
      dispatch(fetchAllCampuses());
    },
  }
}

export default connect(mapState, mapDispatch)(PostStudentForm);