// Icons
import Chevron from "../icons/chevron";

// Components
import Category from "./Category";

// Hooks
import { useState } from "react";

// redux hooks
import { useSelector } from "react-redux";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full ",
  ul: "text-sm font-medium flex flex-col gap-5 pb-4",
  icon: "duration-200 w-4 h-4",
};

const Categories = () => {

const [isOpen, setIsOpen] = useState(false)

const toggleCategories = () => {
  setIsOpen(!isOpen)
}


const categories = useSelector(state => state.categories.categories)   //cateqoriyalari map etmek ucun categories-i useSelectorla bura cekirik


  return (
    <div className="border-b">
      <button onClick={toggleCategories} className={styles.btn}>
        <span className="font-bold">Category</span>
        <div>
          <Chevron className={`${styles.icon} ${isOpen && "rotate-180"} `} color="black" />
        </div>
      </button>
      { isOpen && <ul className={styles.ul}>
{        categories.map((category) => {
           return <Category key = {category}>{category}</Category>
         })
        
       }
    
      </ul>}
    </div>
  );
};

export default Categories;
