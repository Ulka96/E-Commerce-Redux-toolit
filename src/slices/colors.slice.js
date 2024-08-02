import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name: "color",
    initialState:{
       colors: [],
       selectedColors : []
    },
    reducers: {
        setColors : (state,action) => {
        const colors = action.payload;
        state.colors = colors
        },

        selectColors: (state,action) => {
         const color = action.payload

         const isSelected = state.selectedColors.includes(color);

         if(!isSelected) {
            state.selectedColors.push(color)
         }
         else{
            state.selectedColors = state.selectedColors.filter(selectedColor => selectedColor !== color)
         }

        }
    }

})

export const {setColors, selectColors} = colorSlice.actions;
export default colorSlice;