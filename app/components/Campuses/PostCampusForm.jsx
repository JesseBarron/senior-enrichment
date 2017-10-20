import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { postCampusToDB } from '../../reducers/Campus';
import { Form, Col, FormControl, FormGroup, ControlLabel, Button, HelpBlock} from 'react-bootstrap';

class PostCampusForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      isDisabled: true,
      inputValue: ''
    }
  }
  handleNameInput(e) {
    let inputValue = e.target.value;
    let isDisabled = inputValue.length >= 3 
    ? false
    : true;

    this.setState({ inputValue, isDisabled });
  }

  campusValidation() {
    const length = this.state.inputValue.length;
    if(length >= 3 ) {
      return 'success'
    }
    return 'warning'
  }
  render() {
    return (
      <Form horizontal onSubmit={this.props.handleSubmit}>
        <FormGroup 
          controlId='nameForm'
          validationState={this.campusValidation()}
        >
          <Col componentClass={ControlLabel} sm={2}>
          Name:
          </Col>
          <Col sm={5}>
            <FormControl
             type='text'
              placeholder='Enter Campus Name'
              value={this.state.inputValue}
              onChange = {this.handleNameInput.bind(this)}
            />
          <FormControl.Feedback />
          <HelpBlock> Name must be at least three characters long </HelpBlock>
          </Col>
          <Col>
            <Button disabled={this.state.isDisabled} type='submit'>
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit: (e) => {
      e.preventDefault();
      let name = e.target.nameForm.value
      dispatch(postCampusToDB({ name }));
    }
  }
}
export default connect(null, mapDispatch)(PostCampusForm);