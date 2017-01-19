export const setSearchDownload = (newValue) => {
    return {
        type: 'SET_SEARCH_DOWNLOAD',
        searchText: newValue,
    }
}

export const clearSearchDownload = () => {
    return {
        type: 'CLEAR_SEARCH_DOWNLOAD',
    }
}