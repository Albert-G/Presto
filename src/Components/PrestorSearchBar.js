import React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Cancel from 'material-ui/svg-icons/navigation/cancel'
import {indigo100, white} from 'material-ui/styles/colors';

const styles = {
  hintFontSize: '12.5px',
  fontSize: '14px',
  iconStyles: {
    width: 20,
    height: 20,
  },
  prestoSearchBarStytles: {
    backgroundColor: '#2850A7',
    height: 40,
  }  
}

export default class PrestoSearchBar extends React.Component {
  render() {
    return (
      <Toolbar style={styles.prestoSearchBarStytles}>
        <ToolbarGroup>
            <TextField hintText="Search downloads" hintStyle={{color: indigo100, fontSize: styles.hintFontSize}} underlineShow={false} inputStyle={{color: white, fontSize: styles.fontSize}}/>
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
            <IconButton tooltip="Clear Search" iconStyle={styles.iconStyles}>
              <Cancel color={white} />
            </IconButton>
        </ToolbarGroup>          
      </Toolbar>
    );
  }
}