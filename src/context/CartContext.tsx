import React, { createContext, useState, ReactNode } from "react";
import { toast } from 'react-toastify';
import { Product } from "../types/Product";

export interface CartContextType {
  cart: Product[];
  addToCart: (payload: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (payload: Product) => {
    setCart([...cart, payload]);
    toast.success(`🦄 ${payload.title} $${payload.price}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
  });
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error('🦄 Product was removed', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
