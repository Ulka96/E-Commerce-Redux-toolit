import CartItem from "./CartItem"

// redux hooks

import { useSelector } from "react-redux"

const CartItems = () => {

const cartItems = useSelector(state => state.cart)    
  return (
    <div
    id="cartList"
    className="border-y border-neutral-100 pt-10 pb-20 flex overflow-x-scroll gap-20"
  >
    {
        cartItems.map((cartItem) => {
            return  <CartItem key={cartItem.id} cartItem = {cartItem}/>
        })
    }
  </div>
  )
}

export default CartItems