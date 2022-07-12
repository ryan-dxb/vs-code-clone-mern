import {createSlice} from "@reduxjs/toolkit";


export const initialState = {
    userFiles: [],
    activeFilesIds: [],
    editorActiveFileId: null,
}


const filesSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        setFiles: (state, action) => {
            state.userFiles = action.payload;
            state.activeFilesIds = [];
        },
        addActiveFile: (state, action) => {
            state.activeFilesIds.push(action.payload);
        },
        removeActiveFile: (state, action) => {
            state.activeFilesIds = state.activeFilesIds.filter(id => id !== action.payload);
        },
        setEditorActiveFileId: (state, action) => {
            state.editorActiveFileId = action.payload;
        },
        updateFileCode: (state, action) => {
            const {fileId, code} = action.payload;
            const {userFiles} = state;
            const file = userFiles.find(file => file.id === fileId);

            if (file) {
                file.code = code;
            }
        }
    }
})


export const {setFiles, addActiveFile, removeActiveFile, setEditorActiveFileId, updateFileCode} = filesSlice.actions;
export default filesSlice.reducer;