import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import './App.css';
import AvailableItems from './components/AvailableItems';
import SubmitBook from './components/SubmitBook';

class App extends Component {
  render() {
      const muiTheme = getMuiTheme({
        palette: {
          primary1Color: "#4CAF50",
        },}); 
      return (
        <MuiThemeProvider
        muiTheme={muiTheme}
        >
        <div style={{ backgroundColor:'#f5f5f5' }}>
        <AppBar title="CollegeBasket"></AppBar>
        {/* <AvailableItems/> */}
        <SubmitBook/>
        </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
