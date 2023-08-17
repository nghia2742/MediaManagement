// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        error: null,
        loading: true,
        currentDirectory: '',
    },
    reducers: {
        changeDirectory: (state, action) => {
            if (state.currentDirectory === '') {
              state.currentDirectory += action.payload;
            } else {
              state.currentDirectory += "/" + action.payload;
            }
        },
        prevDirectory: (state) => {
            const array = state.currentDirectory.split('/')
            array.pop()
            state.currentDirectory = array.toString().replace(',','/')
        },
        fetchDataSuccess: (state, action) => {
            state.data = action.payload;
            state.error = null;
            state.loading = false;
        },
        fetchDataFailure: (state, action) => {
            state.data = null;
            state.error = action.payload;
        },
    },
});

export const {
    changeDirectory,
    prevDirectory,
    fetchDataSuccess,
    fetchDataFailure,
} = dataSlice.actions;
export default dataSlice.reducer;
