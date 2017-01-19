const initialState = {
    features: [],
    version: '-',
    error: {},
}

const Aria2Status = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ARIA2_STATUS':
            return state;
        case 'SET_ARIA2_STATUS':
            return {
                features: action.features,
                version: action.version,
                error: initialState.error,
            }
        case 'SET_ARIA2_ERROR':
            return {
                features: initialState.features,
                version: initialState.version,
                error: action.error,
            }
        default:
            return state;
    }
}

export default Aria2Status