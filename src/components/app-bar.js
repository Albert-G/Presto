import React from 'react';
import AppBar from 'material-ui/AppBar';
import BarMenu from './bar-menu'

const PrestoAppBar = () => (
  <AppBar
    title="Presto"
    iconElementRight={<BarMenu />}
  />
);

export default PrestoAppBar;