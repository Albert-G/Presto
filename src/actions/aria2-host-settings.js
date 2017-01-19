export const setHostSettings = (hostSettings) => {
    return {
        type: 'SET_HOST_SETTINGS',
        hostSettings: hostSettings,
    }
}

export const getHostSettings = () => {
    return {
        type: 'GET_HOST_SETTINGS',
    }
}

export const toggleHostSettings = () => {
    return {
        type: 'TOGGLE_HOST_SETTINGS',
    }
}