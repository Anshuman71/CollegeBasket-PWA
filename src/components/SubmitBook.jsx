import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class SubmitBook extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div
      style={{ display:'flex',
      minHeight:'700px',
      flexBasis:'100%',
      flexWrap:'wrap',
      justifyContent:'center'
     }}
      >
        <Paper
        zDepth={2}
        style={{
          width:'100%',maxHeight:'60px',
          padding:'20px',fontSize:'20px',margin:'0px',
          color:'#FF7043',textAlign:'center'
        }}
        >
          Sumbit your book here !
        </Paper>

        <TextField
        floatingLabelText="Book Name"
        style={{width:'300px',margin:'0px'}}
        />

        <TextField
        floatingLabelText="Price"
        style={{width:'300px',margin:'0px'}}
        />

        <SelectField
        >
          <MenuItem>
          </MenuItem>
        </SelectField>

        <RaisedButton
        primary
        label="Sell"
        style={{
          width:'120px',
          maxHeight:'35px',
          textAlign:'center',
        }}
        />

      </div>
    );
  }
}

export default SubmitBook;