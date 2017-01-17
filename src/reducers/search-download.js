const initialState = {
    searchText: '',
    hasInputText: false
}

const SearchDownload = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_DOWNLOAD':
            return {
                searchText: action.searchText,
                hasInputText: action.searchText != null && action.searchText.length > 0
            }
        case 'CLEAR_SEARCH_DOWNLOAD':
            return {
                searchText: '',
                hasInputText: false
            }
        default:
            return state;
    }
}

export default SearchDownload