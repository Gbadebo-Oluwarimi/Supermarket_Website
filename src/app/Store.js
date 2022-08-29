import { configureStore } from '@reduxjs/toolkit'
import addToCartReducer from '../features/addToCartSlice'
import stateChangeSliceReducer from '../features/stateChangeSlice'
export const store = configureStore({
    reducer:{
        add:addToCartReducer,
        changestate:stateChangeSliceReducer,
    }
})