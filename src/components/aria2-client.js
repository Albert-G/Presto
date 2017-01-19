import React from 'react';
import { connect } from 'react-redux';
import { setAria2Status, getAria2Status, setAria2Error } from '../actions/aria2-status';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import { toggleHostSettings } from '../actions/aria2-host-settings'

class Aria2Client extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            open: false,
        };        
        this.aria2 = { client: null }
        this.props.startAria2Client(this.aria2, this.props.hostSettings);
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.hostSettings !== this.props.hostSettings) {
            console.log('aria2 config changed, reinitial aria2 client.');
            this.props.startAria2Client(this.aria2, this.props.hostSettings);
        } else if (prevProps.error !== this.props.error && this.props.error.message) {
            this.openSnackBar();
        }
    }

    openSnackBar = () => {
        this.setState({
            open: true,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    openHostSettings = () => {
        this.props.toggleHostSettings();
    }

    render() {
        const actions = [
        <FlatButton
            label="Settings"
            onTouchTap={this.openHostSettings}
            secondary={true}
        />,         
        ];

        return (
            <Snackbar
            action={actions}
            open={this.state.open}
            message={this.props.error.message}
            onRequestClose={this.handleRequestClose}
            />
        );
  }
}

const mapStateToProps = (state) => {
  return {
    hostSettings: state.Aria2HostSettings.hostSettings,
    error: state.Aria2Status.error,
  }
}

const dispatchError = (dispatch, err) => {
    dispatch(setAria2Error(err));
}

const dispatchAria2Status = (dispatch, res) => {
    dispatch(setAria2Status(res.enabledFeatures, res.version))
}

const mapDispatchToProps = (dispatch) => {
  return {
    startAria2Client: (aria2, options) => {
        if (aria2 != null && aria2.client != null) {
            aria2.client.close();
            aria2.client = null;
        }

        var Aria2 = require('aria2');        
        aria2.client = new Aria2(options);
        aria2.client.getVersion().then(
            function (res) {
                console.log('result', res)
                dispatchAria2Status(dispatch, res);
            },
            function (err) {
                console.log('error', err)
                dispatchError(dispatch, err);
            }            
        );
      },
      toggleHostSettings: () => {
          dispatch(toggleHostSettings());
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aria2Client);