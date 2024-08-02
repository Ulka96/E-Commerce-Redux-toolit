// Components
import Categories from "./Categories";
import Colors from "./Colors";
import Sizes from "./Sizes";

const Filter = () => {
  return (
    <div className="col-span-3">
      <Categories />
      <Colors />
      <Sizes />
    </div>
  );
};

export default Filter;
