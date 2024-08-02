// Router
import { Route, Routes } from "react-router-dom";

import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";

// Components
import Container from "./components/Container";
import Header from "./components/Header";

// Pages
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import { useEffect } from "react";
import { setCartItems } from "./slices/cart.slice";

const App = () => {

const {pathname} = useLocation();  

const dispatch = useDispatch();

const userId = JSON.parse(localStorage.getItem("userId"))

const getSpecificCart = async() => {
  const response = await fetch(`http://localhost:3000/cart?userId=${userId}`);
  const data = await response.json();
  dispatch(setCartItems(data))
}

useEffect(() => {
  getSpecificCart();
}, [userId]);

  return (
    <Container>
    {pathname === "/sign-in" || pathname === "/sign-up" ? null : <Header />}
      <main className="my-20 font-satoshi">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/sign-in" element={<SignInPage/>} />
          <Route path="/sign-up" element={<SignUpPage/>} />
        </Routes>
      </main>
    </Container>
  );
};

export default App;
