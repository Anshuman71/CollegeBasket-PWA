import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import PersonCircle from 'material-ui/svg-icons/action/account-circle';
import Layer from 'material-ui/svg-icons/maps/layers';


import './App.css';
import AvailableItems from './components/AvailableItems';
import SubmitBook from './components/SubmitBook';
import Login from './components/Login';
import SignUp from './components/SignUp';
import BottomNav from './components/BottomNav';

class App extends Component {
  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: "#4CAF50",
      },
    });
    return (
      <MuiThemeProvider
        muiTheme={muiTheme}
      >
        <div style={{ backgroundColor: '#f5f5f5' }}>
          <AppBar title="CollegeBasket"
          iconElementLeft={<Layer color="#fff" style={{width:'40px',height:'40px',padding:'5px 10pxs'}}/>}
          iconElementRight={<PersonCircle  color="#fff" style={{width:'35px',height:'35px',marginRight:'10px',paddingTop:'5px'}}/>}
          ></AppBar>
          {/* <AvailableItems /> */}
          {/* <SubmitBook/> */}
          {/* <Login /> */}
          <SignUp/>
          <BottomNav/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
