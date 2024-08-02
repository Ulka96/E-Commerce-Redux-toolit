import React from "react";

// actions
import { selectColors } from "../slices/colors.slice";

// redux hooks
import { useDispatch, useSelector } from "react-redux";

const Color = ({ color }) => {

const dispatch = useDispatch();

const selectColorsAction = () => {
  dispatch(selectColors(color))
}

const selectedColors = useSelector(state => state.colors.selectedColors)

const isSelected = selectedColors.includes(color)

  return (
    <li onClick={selectColorsAction}
      style={{ backgroundColor: `#${color}` }}
      className={`h-8 w-8 border flex items-center justify-center rounded-full cursor-pointer`}
    >
     {isSelected && <span className="h-3 w-3 rounded-full bg-gray-200"></span>}
    </li>
  );
};

export default Color;
