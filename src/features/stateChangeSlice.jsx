import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    soon:true,
    product:false,
    products:false,
    popup:false,
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
        }
    }
})
export const { productsState, productstate, comingsoon, updatePopup } = stateChangeSlice.actions
export default stateChangeSlice.reducer