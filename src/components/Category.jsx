import React from "react";

// actions
import { selectCategory } from "../slices/categories.slice";

// redux hooks
import { useDispatch, useSelector } from "react-redux";

const Category = ({children}) => {
  
const dispatch = useDispatch();

const selectCategoryAction = () => {
  dispatch(selectCategory(children))
}  

const selectedCategories = useSelector(state => state.categories.selectedCategories) // selected arrayini caterogy slice-dan eyni adla bura cekdik
const isSelected = selectedCategories.includes(children) 

  return <li onClick={selectCategoryAction} className={`cursor-pointer text-black ${isSelected && "font-black"}`}
  >{children.replaceAll("_", " & ")}
  </li>;
};

export default Category;
