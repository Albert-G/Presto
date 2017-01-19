import { getSettings, setSettings } from '../api/aria2-host-settings'

const initialState = {
    hostSettings: getSettings(),
    open: false,
}

const Aria2HostSettings = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_HOST_SETTINGS':
            return state;
        case 'SET_HOST_SETTINGS':
            setSettings(action.hostSettings);
            return {
                hostSettings: action.hostSettings,
                open: state.open
            };
        case 'TOGGLE_HOST_SETTINGS':
            return {
                hostSettings: state.hostSettings,
                open: !state.open
            };
        default:
            return state;
    }
}

export default Aria2HostSettings