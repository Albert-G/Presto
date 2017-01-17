import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PrestoTheme from './Theme/PrestoTheme'
import PrestoMain from './Components/PrestoMain'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(PrestoTheme)}>
        <PrestoMain />
      </MuiThemeProvider>
    );
  }
}

export default App;
