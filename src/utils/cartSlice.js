import { createSlice } from "@reduxjs/toolkit";
import { clear } from "@testing-library/user-event/dist/clear";


const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items: ["burger","momos"],
    },
    reducers : {
        addItem : (state,action) => {
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0
        },
    }
})

export const {addItem,removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer