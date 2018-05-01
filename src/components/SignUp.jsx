import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import LinearProgressBar from 'material-ui/LinearProgress';

import TheStepper from './Stepper';

const Loading = () => {
  return <LinearProgressBar indeterminate={true} />
}

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: '#dfdfdf',
          height: '670px',
          display: "flex", flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <Paper
          zDepth={3}
          style={{ width: '420px', height: '520px', margin: '10px', marginBottom: '80px'}}
        >
          <Loading />
          <TheStepper />
        </Paper>
      </div>
    );
  }
}

export default SignUp;