import {removeActiveFile, setEditorActiveFileId} from "../../slices/files/files";

export const closeFile = (fileToCloseId) => (dispatch, getState) => {
    const {
        files: {activeFilesIds, editorActiveFileId},
    } = getState();

    const activeFilesLength = activeFilesIds.length;

    if (activeFilesLength === 1) {
        dispatch(setEditorActiveFileId(null));
    } else if (activeFilesLength >= 2 && fileToCloseId === editorActiveFileId) {
        const newActiveFileId = getNewActiveFileId(activeFilesIds, fileToCloseId, activeFilesLength);
        dispatch(setEditorActiveFileId(newActiveFileId));
    }

    dispatch(removeActiveFile(fileToCloseId));

}

const getNewActiveFileId = (activeFilesIds, fileToCloseId, activeFilesLength) => {
    const fileToBeRemovedIndex = activeFilesIds.indexOf(fileToCloseId);


    // This happens when the active file is the right most tab
    if (fileToBeRemovedIndex + 1 === activeFilesLength) {
        return activeFilesIds[fileToBeRemovedIndex - 1];
    }

    return activeFilesIds[fileToBeRemovedIndex + 1];
}