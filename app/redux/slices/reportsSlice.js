import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    reportsState: null,
    reportsIsLoading: true,
    reportsErrorMessage: ''
}

export const loadReportsData = createAsyncThunk('loadReportsData', async (data) => {
    const {
        symbols,
        date_from,
        date_to
    } = data;
    var res = null;
    const dateNow = new Date();
    try {
        await axios.get('http://api.marketstack.com/v1/eod?access_key=53531dc954e95198c1c997f0d38d86be&symbols=' + symbols + '&date_from=' + date_from + '&date_to=' + date_to)
            // await axios.get('https://reqres.in/api/users?page=2')
            .then(function (response) {
                // handle success
                res = JSON.parse(response.request._response);
            })
            .catch(function (error) {
                // handle error
                res = error;
            })
            .finally(function () {
                // always executed
            });
    } catch (error) {
        res = error;
    }
    return res;
})

export const reportsSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {
    }, extraReducers: {
        [loadReportsData.pending]: (state) => {
            state.reportsIsLoading = true;
        },
        [loadReportsData.fulfilled]: (state, { payload }) => {
            if (payload)
                state.reportsState = payload;
            state.reportsIsLoading = false;
            state.reportsErrorMessage = '';
        }, [loadReportsData.rejected]: (state, { payload }) => {
            state.reportsIsLoading = false;
            state.reportsErrorMessage = payload;
        }
    }
})

export default reportsSlice.reducer;