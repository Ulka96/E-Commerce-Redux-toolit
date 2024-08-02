import React from "react";

// actions
import { selectSize } from "../slices/size.slice";

// redux hooks
import { useDispatch , useSelector} from "react-redux";

const Size = ({ children }) => {

const dispatch = useDispatch();

const selectSizeAction = () => {
  dispatch(selectSize(children))
}


const selectedSizes = useSelector(state => state.sizes.selectedSizes)

const isSelected = selectedSizes.includes(children)


  return (
    <li onClick={selectSizeAction}
      className= {`font-bold uppercase ${!isSelected ? "bg-gray-200 text-black" : "bg-gray-900 text-white"  } w-9 h-9 flex items-center justify-center cursor-pointer rounded-lg`}
    >
      {children}
    </li>
  );
};

export default Size;
