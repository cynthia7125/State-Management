import React, { useEffect, useReducer } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Route, Routes } from "react-router-dom";
import Detail from "./DetailRefs";
import Cart from "./Cart";
import Checkout from "./Checkout";
import CartReducer from "./cartReducer";


let initialCart;
try {
  initialCart = JSON.parse(localStorage.getItem("cart")) ?? [];
} catch {
  console.error("The cart could not be parsed into JSON.");
  initialCart = [];
}

export default function App() {



  const [cart, dispatch] = useReducer(CartReducer, initialCart);

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  // function addToCart(id, sku) {
  //   setCart((items) => {
  //     const itemInCart = items.find((i) => i.sku === sku);
  //     if (itemInCart) {
  //       return items.map((i) =>
  //         i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
  //       );
  //     } else {
  //       return [...items, { id, sku, quantity: 1 }];
  //     }
  //   });
  // }

  // function updateQuantity(sku, quantity) {
  //   setCart((items) => {
  //     return quantity === 0
  //       ? items.filter((i) => i.sku !== sku)
  //       : items.map((i) => (i.sku === sku ? { ...i, quantity } : i));
  //   });
  // }

  // function emptyCart() {
  //   setCart([]);
  // }

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route
              path="/:category/:id"
              element={<Detail dispatch={dispatch} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} dispatch={dispatch} />}
            />

=======<Route
              element={<Checkout cart={cart} dispatch={dispatch} />}
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
