import {addActiveFile, setEditorActiveFileId} from "../../slices/files/files";

const openFile = (node) => (dispatch, getState) => {
    const {id, children} = node;

    if (children) {
        return
    }

    const {
        files: {activeFilesIds},
    } = getState();

    if (!activeFilesIds.includes(id)) {
        dispatch(addActiveFile(id))
    }

    dispatch(setEditorActiveFileId(id))
}