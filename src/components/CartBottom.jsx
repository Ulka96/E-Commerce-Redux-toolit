import Yellow from "../images/Yellow.png"
// Icons
import Arrow from "../icons/arrow";

// redux hooks

import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartBottom = () => {

const cartItems = useSelector(state => state.cart).map(cartItem => cartItem.quantity * cartItem.product.price)  

  return (
    <div className="flex justify-between items-center">
    <div className="flex gap-2">
      <span className="font-medium text-4xl">Subtotal:</span>
      <div className="font-black relative text-4xl max-w-fit">
        <span className="relative z-10">{cartItems.length > 0 ? cartItems.reduce((prev, curr) => prev + curr).toFixed(2) : 0 } AZN</span>
        <img
          className="absolute -top-1/4 left-0"
          src={Yellow}
          alt="Curved yellow line"
        />
      </div>
    </div>
    <button
      className="uppercase rounded-lg flex text-xl font-black transition-all duration-200 w-1/4 items-center justify-between py-6 px-8 text-white bg-black hover:bg-blue-600"
    >
      Place your order
      <Arrow/>
    </button>
  </div>
  )
}

export default CartBottom