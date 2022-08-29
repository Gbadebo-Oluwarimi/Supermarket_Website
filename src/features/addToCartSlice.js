import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items:[
        {
            "id":0,
            "img":'/images/img-01.png',
            "added":false,
            "title":"Baby Diapers",
            "price":"N4,500",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":1,
            "img":'/images/img-002.png',
            "added":false,
            "title":"Dark Grey Hoodie",
            "price":"N6,450",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":2,
            "img":'/images/img-03.png',
            "added":false,
            "title":"Basmati Rice",
            "price":"N30,000",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":3,
            "img":'/images/img-04.png',
            "added":false,
            "title":"Mama Pride Rice",
            "price":"N40,000",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":4,
            "img":'/images/img-001.png',
            "added":false,
            "title":"Top Boy Sneakers",
            "price":"N9,500",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":5,
            "img":'/images/img-06.png',
            "added":false,
            "title":"Grocery Pack",
            "price":"N530,000",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":6,
            "img":'/images/img-07.png',
            "added":false,
            "title":"Ovaltine",
            "price":"N7,000",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":7,
            "img":'/images/img-08.png',
            "added":false,
            "title":"Peak Milk",
            "price":"N7,800",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":8,
            "img":'/images/img-09.png',
            "added":false,
            "title":"Dano milk",
            "price":"N8,000",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":9,
            "img":'/images/img-010.png',
            "added":false,
            "title":"Four Cousins",
            "price":"N20,000",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":10,
            "img":'/images/img-011.png',
            "added":false,
            "title":"Cosmetic powder Palette ",
            "price":"N3,000",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":11,
            "img":'/images/img-012.png',
            "added":false,
            "title":"Cosmetic Professional Gear",
            "price":"N30,000",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":12,
            "img":'/images/img-013.png',
            "added":false,
            "title":"Castillo Wine",
            "price":"N40,000",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":13,
            "img":'/images/img-014.png',
            "added":false,
            "title":"Nike Shoes",
            "price":"N20,500",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":14,
            "img":'/images/img-015.png',
            "added":false,
            "title":"Grey Black Hoodie",
            "price":"N9,500",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":15,
            "img":'/images/img-001.png',
            "added":false,
            "title":"Grey Shoes",
            "price":"N9,500",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":16,
            "img":'/images/img-002.png',
            "added":false,
            "title":"Grey Black Hoodie",
            "price":"N9,500",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":17,
            "img":'/images/img-003.png',
            "added":false,
            "title":"Pack Of Fanta",
            "price":"N9,500",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":18,
            "img":'/images/img-004.png',
            "added":false,
            "title":"Pack Of Coke",
            "price":"N9,500",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":19,
            "img":'/images/img-005.png',
            "added":false,
            "title":"Origin Drink",
            "price":"N1,500",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":20,
            "img":'/images/img-006.png',
            "added":false,
            "title":"Golden morn Pack",
            "price":"N9,500",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":21,
            "img":'/images/img-7.png',
            "added":false,
            "title":"Dolce Perfume",
            "price":"N9,500",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":22,
            "img":'/images/img-008.png',
            "added":false,
            "title":"Milo Pack",
            "price":"N9,500",
            "Shipping":true,
            "pickup":true
        },
        {
            "id":23,
            "img":'/images/img-009.png',
            "added":false,
            "title":"Power Oil",
            "price":"N6,500",
            "Shipping":true,
            "pickup":true
        },

   ],
   message:"",
   added:[],
   loading:false,
   item:null,
}

const addToCartSlice = createSlice({
    name:'addtocart',
    initialState,
    reducers:{
        addToCart:(state, action) => {
            const found = state.items.find(item => item.id === action.payload)
            found.added=true
            state.message="Added to Cart Successfully"
            state.added.push(found)
            state.item++
        },
        removefromcart:(state, action) => {
            const found = state.items.find(item => item.id === action.payload)
            found.added=false
            state.message="Removed from cart"
        },

    }
})
export const { addToCart, removefromcart, findalladded, message } = addToCartSlice.actions
export default addToCartSlice.reducer