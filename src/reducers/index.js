import { combineReducers } from 'redux';
import SearchDownload from './search-download'
import Aria2HostSettings from './aria2-host-settings'
import Aria2Status from './aria2-status'

const PrestoApp = combineReducers({
    SearchDownload,
    Aria2HostSettings,
    Aria2Status,
})

export default PrestoApp;