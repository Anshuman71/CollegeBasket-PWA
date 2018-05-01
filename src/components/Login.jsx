import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import VerifiedUser from 'material-ui/svg-icons/action/verified-user';
import Lock from 'material-ui/svg-icons/action/lock-open';
import FingerPrint from 'material-ui/svg-icons/action/fingerprint';
  

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          height: '670px', backgroundColor: '#dfdfdf',
          display: "flex", flexWrap: 'wrap',
          textAlign: 'center', justifyContent: 'center'
        }}
      >
        <Paper
          zDepth={3}
          style={{ width: '420px', height: '520px', margin: '40px 10px', paddingTop: '20px' }}
        >
          <p>
            Welcome to <b style={{ color: '#4CAF50' }}>CollegeBasket</b> !
          </p>
          <TextField
            style={{ width: '340px' }}
            floatingLabelText="Email"
          />
          <TextField
            style={{ width: '340px' }}
            floatingLabelText="Password"
          />
          <br />
          <br />
          <RaisedButton
            primary
            label="Sign In"
            icon={<Lock />}
            style={{ width: '120px', margin: '10px' }}
          />
          <br />
          <a href='#' style={{ textDecoration: 'none', color: '#FF7043' }}>Forgot Password ?</a>
          <p>
            or
          </p>
          <RaisedButton
            backgroundColor="#01579b"
            labelColor="#fff"
            label="The DuPlatform"
            icon={<VerifiedUser />}
            style={{ margin: '10px' }}
          />
          <p>
            Not subscribed yet ?
          </p>
          <FlatButton
            label="Sign Up"
            icon={<FingerPrint />}
            style={{ width: '120px', margin: '10px' }}
          />

        </Paper>
      </div>
    );
  }
}

export default Login;