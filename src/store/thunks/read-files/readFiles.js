import {createAsyncThunk} from "@reduxjs/toolkit";
import {readFile} from "../../../utils/read-file";
import {setFiles} from "../../slices/files/files";


export const readFiles = createAsyncThunk('files/readFiles', async (files, {dispatch, getState}) => {
    const promises = []


    for (let i = 0; i < files?.length; i++) {
        const file = files[i];
        promises.push(readFile(file));
    }

    const userFiles = await Promise.all(promises);
    dispatch(setFiles(userFiles));

})