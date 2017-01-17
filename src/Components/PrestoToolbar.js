import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import PrestoSearchBar from './PrestorSearchBar';
import PrestoBarMenu from './PrestoBarMenu';

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
            <ToolbarTitle text="Presto" style={{color: 'white', fontSize: '16'}} />
        </ToolbarGroup>

        <ToolbarGroup lastChild={true}>
            <PrestoSearchBar />        
            <PrestoBarMenu />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}