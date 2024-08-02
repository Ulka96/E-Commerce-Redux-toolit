// Components

import Filter from "../components/Filter";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-20">
      <Filter />
      <Products />
   
    </div>
  );
};

export default Home;
