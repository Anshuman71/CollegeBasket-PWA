import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Sell from 'material-ui/svg-icons/editor/attach-money';
import Explore from 'material-ui/svg-icons/action/explore';
import Me from 'material-ui/svg-icons/action/face';

class BottomNav extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({ selectedIndex: index });

  render() {
    const bottom = {
      position: "fixed",
      bottom: 0,
    };
    return (
      <Paper
        zDepth={2}>
        <BottomNavigation selectedIndex={this.state.selectedIndex} style={bottom}>
          <BottomNavigationItem
            label="Explore"
            icon={<Explore />}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Sell"
            icon={<Sell />}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Me"
            icon={<Me />}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNav;