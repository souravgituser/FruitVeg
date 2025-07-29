import React, { createContext, useState, useEffect } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on first render
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, toast, quantity = 1) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find((item) => item.id === product.id);

    if (existingItem) {
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      return [...prevCart, { ...product, quantity }];
    }
  });

  toast("Product added to cart!");
};

const updateCart = (newCart) => {
  setCart(newCart);
};


  const cartCount = cart?.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart,  cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
