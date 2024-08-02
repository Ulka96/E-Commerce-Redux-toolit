
// Components
import CartHeader from "../components/CartHeader";
import CartBottom from "../components/CartBottom";
import CartItems from "../components/CartItems";

const CartPage = () => {
  return (
    <div className="space-y-10">
      <CartHeader/>

      <CartItems/>

       <CartBottom/>
    </div>
  );
};

export default CartPage;
