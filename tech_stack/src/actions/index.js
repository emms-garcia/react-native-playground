export const SELECT_LIBRARY = 'SELECT_LIBRARY';

export const selectLibrary = (libraryID) => ({
    type: SELECT_LIBRARY,
    payload: libraryID,
});
