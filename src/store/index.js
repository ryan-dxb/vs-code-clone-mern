import {configureStore} from "@reduxjs/toolkit";
import combinedReducers from "./reducers";

const store = configureStore({
    reducer: combinedReducers,
    devTools: process.env.NODE_ENV !== "production"
})

export default store;