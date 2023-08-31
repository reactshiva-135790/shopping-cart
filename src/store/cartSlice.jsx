import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
   name : "cart",
   initialState : [],
   reducers : { 
     addProduct : (state, action) => {
      
     },
     removeProduct : (state, action) => {

     },
   }
})

export const  {addProduct,removeProduct} =  cartSlice.actions

export default cartSlice.reducer