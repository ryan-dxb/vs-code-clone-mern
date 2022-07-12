import {createSelector} from "@reduxjs/toolkit";


// Normalize the files data to a list of files

const selectActiveFiles = (files) => {
    const {userFiles, activeFilesIds} = files;
    const userFilesMap = userFiles.reduce((acc, file) => {
        acc[file.id] = file;
        return acc;
    }, {});

    return activeFilesIds.map(id => userFilesMap[id]);
}

export default createSelector((state) => state.files, selectActiveFiles);