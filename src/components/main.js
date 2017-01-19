import React from 'react';
import Toobar from './toolbar'
import FloatingAddButton from './floating-add-button'
import Aria2HostSettings from './aria2-host-settings-dialog'
import Aria2Client from './aria2-client'

export default class PrestoMain extends React.Component {
  render() {
    return (
      <div>
        <Toobar />
        <FloatingAddButton />
        <Aria2HostSettings />
        <Aria2Client />
      </div>
    );
  }
}