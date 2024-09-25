import { createSlice } from "@reduxjs/toolkit";

const savedCities = localStorage.getItem('cities') 
    ? JSON.parse(localStorage.getItem('cities'))
    : [];

export const citySlice = createSlice({
    name: 'cities',
    initialState: {
        cityList: savedCities,
    },
    reducers: {
        addCity: (state, action) => {
            state.cityList.push(action.payload);
            localStorage.setItem('cities', JSON.stringify(state.cityList));
        }
    }
});

export const {addCity} = citySlice.actions;

export default citySlice.reducer;