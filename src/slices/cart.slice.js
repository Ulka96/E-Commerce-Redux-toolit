import { createSlice } from "@reduxjs/toolkit";
import { react } from "react";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers :{
      setCartItems : (state, action) => {
        const cartItems = action.payload;
       return (state = cartItems);
      },

      addToCart : (state, action) => {
       const cartItem = action.payload

       const existingCartItem = state.find((item) => item.product.id === cartItem.product.id
        && item.size === cartItem.size)

       if(existingCartItem && existingCartItem.size === cartItem.size ) {
        existingCartItem.quantity += cartItem.quantity
       }

       else {
        state.push(cartItem)
       }
      },


      removeFromCart : (state, action) => {
       const cartItem = action.payload
      const existingCartItemIndex = state.findIndex((item) => item.product.id === cartItem.product.id &&
      item.size === cartItem.size )

      state.splice(existingCartItemIndex, 1)
      },



    changeAmount : (state, action) => {
      const cartItem = action.payload.cartItem
      const newQuantity = action.payload.newQuantity

      if(newQuantity === 0) {
        const existingCartItemIndex = state.findIndex((item) => 
          item.product.id === cartItem.product.id &&
          item.size === cartItem.size )
  
        state.splice(existingCartItemIndex, 1)
      }
       else {
        const existingCartItem = state.find((item) => item.product.id === cartItem.product.id
        && item.size === cartItem.size)
  
        existingCartItem.quantity = newQuantity;
       }

      


      },
     
         
    }
})

export const {addToCart, removeFromCart, changeAmount, setCartItems} = cartSlice.actions;
export default cartSlice;