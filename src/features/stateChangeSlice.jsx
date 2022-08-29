import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    soon:false,
    product:false,
    products:false,
    popup:false,
    addedsuccessfully:false
}

const stateChangeSlice = createSlice({
    name:"statechange",
    initialState,
    reducers:{
        comingsoon:(state) => {
            state.soon = !state.soon
        },
        productstate:(state) => {
            state.product = !state.product
        },
        productsState:(state) => {
            state.products = !state.products
        },
        updatePopup:(state) => {
            state.popup  =!state.popup
        },
        updateadded:(state) => {
            state.addedsuccessfully = !state.addedsuccessfully
        }
    }
})
export const { productsState, productstate, comingsoon, updatePopup, updateadded } = stateChangeSlice.actions
export default stateChangeSlice.reducer