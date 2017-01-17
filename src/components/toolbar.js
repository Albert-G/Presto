import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import SearchBar from './search-bar';
import BarMenu from './bar-menu';

const sytles = {
  prestoToobarStytles: {
    backgroundColor: '#3367D6',
    height: 56,
  },
}

export default class PrestoToolbar extends React.Component {
  render() {
    return (
      <Toolbar style={sytles.prestoToobarStytles}>
        <ToolbarGroup>
            <ToolbarTitle text="Presto" style={{color: 'white', fontSize: '16px'}} />
        </ToolbarGroup>

        <ToolbarGroup lastChild={true}>
            <SearchBar />        
            <BarMenu />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}