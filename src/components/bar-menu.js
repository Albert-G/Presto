import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const styles = {
  iconStyles: {
    width: 20,
    height: 20,
  },
}

export default class BarMenu extends React.Component {
  render() {
    return (
      <IconMenu
      iconButtonElement={<IconButton iconStyle={styles.iconStyles}><MoreVertIcon color='white' /></IconButton>}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
        <MenuItem primaryText="Clear all" />
        <MenuItem primaryText="Open downloads folder" />
      </IconMenu>
    );
  }
}