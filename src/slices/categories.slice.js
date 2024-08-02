import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState : {
       categories: [],
       selectedCategories : [],
    },
    reducers : {
       setCategories: (state,action) => {
        const categories = action.payload
        state.categories = categories;
       },

       selectCategory : (state,action) => {
       const category = action.payload;
       const isSelected = state.selectedCategories.includes(category);
       
       if(!isSelected) {
        state.selectedCategories.push(category)
       }

       else {
        state.selectedCategories = state.selectedCategories.filter(selectedCategory =>
            selectedCategory !== category
        )
       }

       }
    }
})

export const {setCategories, selectCategory} = categorySlice.actions;
export default categorySlice;