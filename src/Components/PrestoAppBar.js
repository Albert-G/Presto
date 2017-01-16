import React from 'react';
import AppBar from 'material-ui/AppBar';
import PrestoBarMenu from './PrestoBarMenu'

const PrestoAppBar = () => (
  <AppBar
    title="Presto"
    iconElementRight={<PrestoBarMenu />}
  />
);

export default PrestoAppBar;