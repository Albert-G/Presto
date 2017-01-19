import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import {indigo100, white} from 'material-ui/styles/colors';
import { setSearchDownload, clearSearchDownload } from '../actions/search-download';

const styles = {
  hintFontSize: '12.5px',
  fontSize: '14px',
  iconStyles: {
    width: 20,
    height: 20,
  },
  searchBarStytles: {
    backgroundColor: '#2850A7',
    height: 40,
  }  
}

const _searchBar = ({onChange, onKeyDown, clearButtonOnClick, searchText, hasInputText}) => (
      <Toolbar style={styles.searchBarStytles}>
        <ToolbarGroup>
            <TextField 
              hintText="Search downloads" hintStyle={{color: indigo100, fontSize: styles.hintFontSize}} 
              underlineShow={false} 
              inputStyle={{color: white, fontSize: styles.fontSize}}
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={searchText}
            />
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
        {
            <IconButton tooltip="Clear Search" iconStyle={styles.iconStyles} disabled={!hasInputText} onClick={clearButtonOnClick}>
              <Cancel color={white} />
            </IconButton>
        }        
        </ToolbarGroup>          
      </Toolbar>
);

_searchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  clearButtonOnClick: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  hasInputText: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  return {
    searchText: state.SearchDownload.searchText,
    hasInputText: state.SearchDownload.hasInputText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event, newValue) => {
      dispatch(setSearchDownload(newValue));
    },
    onKeyDown: (event) => {
      if (event.key === 'Escape') {
        dispatch(clearSearchDownload());
      }
    },
    clearButtonOnClick: (event) => {
      dispatch(clearSearchDownload());
    },
  }
}

const SearchBar = connect(mapStateToProps, mapDispatchToProps)(_searchBar)

export default SearchBar;