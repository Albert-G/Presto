import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import PrestoBarMenu from './PrestoBarMenu'

export default class PrestoToolbar extends React.Component {
  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
            <ToolbarTitle text="Presto" />
        </ToolbarGroup>
        <ToolbarGroup lastChild='true'>
            <PrestoBarMenu />
            <ToolbarSeparator />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}