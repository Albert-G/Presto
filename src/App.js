import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PrestoTheme from './theme/presto-theme'
import PrestoMain from './components/main'

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
