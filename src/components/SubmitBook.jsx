import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';



class SubmitBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: '',
      checked: false,
    }

  }
  updateCheck = () => {
    const now = this.state.checked;
    this.setState({ checked: !now });
  }

  handleChange = (event, index, condition) => this.setState({ condition });

  render() {
    return (
      <div
        style={{
          display: 'flex',
          minHeight: '700px',
          flexBasis: '100%',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5'
        }}
      >
        <Paper
          zDepth={3}
          style={{
            padding: '20px', maxHeight: '630px',
            maxWidth: '420px',
            backgroundColor: '#fff', margin: '20px',
            fontSize: '20px', color: '#FF7043'
          }}
        >
          Sumbit your book here !
          <Divider
            style={{ marginTop: '10px' }}
          />
          <TextField
            floatingLabelText="Book Name"
            style={{ width: '300px', margin: '0px' }}
          />
          <br />
          <TextField
            floatingLabelText="Author"
            style={{ width: '300px', margin: '0px' }}
          />
          <br />
          <TextField
            floatingLabelText="Edition"
            style={{ width: '300px', margin: '0px' }}
          />
          <br />

          <SelectField
            style={{ width: '300px' }}
            floatingLabelText="Useful For"
          >
            <MenuItem>
            </MenuItem>
          </SelectField>

          <SelectField
            value={this.state.condition}
            onChange={this.handleChange}
            style={{ width: '300px' }}
            floatingLabelText="Condition"
          >
            <MenuItem
              value={null}
              primaryText=""
            />
            <MenuItem
              value={1}
              primaryText="New"
            />
            <MenuItem
              value={2}
              primaryText="Looks like new"
            />
            <MenuItem
              value={3}
              primaryText="Good to go"
            />
            <MenuItem
              value={4}
              primaryText="Usable"
            />
          </SelectField>

          <br />
          <br />

          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            label="Help Someone , Donate"
            onCheck={this.updateCheck}
          />

          <br />

          <img
            src={require('../images/rupee.svg')}
            alt="Book"
            style={{ maxHeight: '18px', maxWidth: '18px', paddingTop: '20px' }}
          />
          <TextField
            floatingLabelText="Price"
            disabled={this.state.checked}
            style={{ width: '290px', margin: '0px' }}
          />

          <br />
          <RaisedButton
            primary
            label="Snaps"
            style={{
              width: '120px',
              maxHeight: '35px',
              textAlign: 'center',
              margin: '10px'
            }}
          />

          <RaisedButton
            primary
            label="Sell"
            style={{
              width: '120px',
              maxHeight: '35px',
              textAlign: 'center',
              margin: '10px'
            }}
          />

        </Paper>
      </div>
    );
  }
}

export default SubmitBook;