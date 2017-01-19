import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { connect } from 'react-redux';
import { toggleHostSettings } from '../actions/aria2-host-settings'

const styles = {
  iconStyles: {
    width: 20,
    height: 20,
  },
}

class BarMenu extends React.Component {
  render() {
    return (
      <IconMenu
      iconButtonElement={<IconButton iconStyle={styles.iconStyles}><MoreVertIcon color='white' /></IconButton>}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      onItemTouchTap={this.props.onItemTouchTap} >
        <MenuItem primaryText="Clear all" />
        <MenuItem primaryText="Aria2 host settings..." id='aria2-host-settings' />
      </IconMenu>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemTouchTap: (event, menuItem) => {
      switch (menuItem.props.id) {
        case 'aria2-host-settings':
          return dispatch(toggleHostSettings());
        default:
          return;
      }
    },
  }
}

export default connect(null, mapDispatchToProps)(BarMenu);