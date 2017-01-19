import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import NumberInput from 'material-ui-number-input';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux';
import { setHostSettings, toggleHostSettings } from '../actions/aria2-host-settings'

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginTop: 30,
    marginLeft: 10,    
  },
  options: {
    marginLeft: 10
  },
  divider: {
    marginTop: 15,
    marginBottom: 15,
  }
};

class Aria2HostSettings extends React.Component {
    constructor (props) {
      super(props);
        this.state = {
          host: this.props.hostSettings.host,
          port: this.props.hostSettings.port,
          path: this.props.hostSettings.path,
          secret: this.props.hostSettings.secret,
          secure: this.props.hostSettings.secure,
          errorText: '',
      };
    };

  handleUrlChange(event) {
    this.setState({host: event.target.value});
  };

  handlePortChange(event) {
    this.setState({port: parseInt(event.target.value)});
  };

  handlePathChange(event) {
    this.setState({path: event.target.value});
  };

  handleSecretChange(event) {
    this.setState({secret: event.target.value});
  };

  handleSecureToggle(event) {
    this.setState({secure: !this.state.secure});
  };

  Close = () => {
    this.props.toggleSettings();
  };

  handelCancel = () => {
    this.Close();
    this.setState({host: this.props.hostSettings.host});
    this.setState({port: this.props.hostSettings.port});
    this.setState({path: this.props.hostSettings.path});
    this.setState({secret: this.props.hostSettings.secret});
    this.setState({secure: this.props.hostSettings.secure});
  };

  handelSave = () => {
    this.Close();
    this.props.saveSettings({
      'host': this.state.host,
      'port': parseInt(this.state.port),
      'path': this.state.path,
      'secret': this.state.secret,
      'secure': this.state.secure,
    });
  };

  onError = (error) => {
    let errorText;
    switch (error) {
      case 'required':
        errorText = 'This field is required';
        break;
      case 'invalidSymbol':
        errorText = 'You are tring to enter none number symbol';
        break;
      case 'incompleteNumber':
        errorText = 'Number is incomplete';
        break;
      case 'singleMinus':
        errorText = 'Minus can be use only for negativity';
        break;
      case 'singleFloatingPoint':
        errorText = 'There is already a floating point';
        break;
      case 'singleZero':
        errorText = 'Floating point is expected';
        break;
      case 'min':
        errorText = '1 ~ 65535';
        break;
      case 'max':
        errorText = '1 ~ 65535';
        break;
      default:
        break;
    }
      this.setState({ errorText: errorText });
  };


  render() {
    const { state, onError } =  this

    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.handelCancel}
      />,       
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={this.handelSave}
      />,     
    ];

    return (
      <div>
        <Dialog
          title="Aria2 host settings"
          actions={actions}
          modal={true}
          open={this.props.open}
          onRequestClose={this.Close}
        >
          <div style={{float: 'left', width: '50%'}}>
            <TextField floatingLabelText="Host URL" value={state.host} onChange={this.handleUrlChange.bind(this)} style={styles.options} /><br />
            <NumberInput floatingLabelText="Port" value={state.port.toString()} onChange={this.handlePortChange.bind(this)} 
              strategy='warn' errorText={state.errorText} onError={onError} min={1} max={65535} style={styles.options} /><br />
            <TextField floatingLabelText="RPC path" value={state.path} onChange={this.handlePathChange.bind(this)} style={styles.options} /><br />
            <TextField floatingLabelText="Secret" value={state.secret} onChange={this.handleSecretChange.bind(this)} style={styles.options} /><br />
            <div style={styles.block}>
              <Toggle style={styles.toggle} label="SSL/TLS encryption" toggled={this.state.secure} onToggle={this.handleSecureToggle.bind(this)} /><br />
            </div>
          </div>

          <div style={{float: 'left'}}>
            <div>Aria2 version: { this.props.hostStatus.version }</div>
            <Divider style={styles.divider} />
            <div>Enabled features: </div>
            <ul>
              { this.props.hostStatus.features.map(feature => (<li>{feature}</li>)) }
            </ul>
          </div>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hostSettings: state.Aria2HostSettings.hostSettings,
    hostStatus: state.Aria2Status,
    open: state.Aria2HostSettings.open,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveSettings: (hostSettings) => {
      dispatch(setHostSettings(hostSettings));
    },
    toggleSettings: () => {
      dispatch(toggleHostSettings());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aria2HostSettings);