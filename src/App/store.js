import rtk from "@reduxjs/toolkit";
import cakeReducer from '../features/cake/cakeSlice.js'
const configureStore = rtk.configureStore
const store = configureStore({
    reducer: {
        cake: cakeReducer
    }
})

export default store

