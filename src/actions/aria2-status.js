export const setAria2Status = (features, version) => {
    return {
        type: 'SET_ARIA2_STATUS',
        features: features,
        version: version,
    }
}

export const getAria2Status = () => {
    return {
        type: 'GET_ARIA2_STATUS',
    }
}

export const setAria2Error = (error) => {
    return {
        type: 'SET_ARIA2_ERROR',
        error: error,
    }
}