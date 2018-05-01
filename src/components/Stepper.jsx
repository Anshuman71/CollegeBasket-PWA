import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField/TextField';

class TheStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  renderStepActions(step) {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: '12px 0' }}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{ marginRight: 12 }}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const { finished, stepIndex } = this.state;

    return (
      <div style={{ maxWidth: 380, maxHeight: 500, margin: 'auto' }}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Sign Up</StepLabel>
            <StepContent>
              <p
              style={{lineHeight:'22px'}}
              >
                Welcome to <b style={{ color: '#4CAF50' }}>CollegeBasket </b>
                <br />
                Follow along us to sign up in 3 easy steps
              </p>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Little Bit Info</StepLabel>
            <StepContent>
              <p>This info will be used to make up your profile</p>
              <TextField
                floatingLabelText="Username"
              />
              <TextField
                floatingLabelText="Email"
              />
              <TextField
                floatingLabelText="Phone"
              />

              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Credentials</StepLabel>
            <StepContent>
              <TextField
              floatingLabelText="Password"
              />
              <TextField
              floatingLabelText="Confirm Password"
              />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <div
          style={{textAlign:'center',lineHeight:'25px',padding:'40px 0px'}}
          >
            <p
            style={{margin:'20px 0px'}}
            >
              You are Good to Go now <br />
              We wish that your college life will be awesome.
            <br />
              All the best from 
              Team <b style={{ color: '#4CAF50' }}>CollegeBasket</b>
            </p>
            <p style={{ margin: '20px 0', textAlign: 'center' }}>
              <RaisedButton
                primary
                label="Sign Up"
              />
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default TheStepper;