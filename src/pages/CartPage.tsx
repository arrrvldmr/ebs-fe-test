import React, { useContext } from "react";
import { CartContext, CartContextType } from "../context/CartContext";
import Header from "../components/Header";
import ProductCard from "../components/ProdCard";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { ShoppingCart } from "react-feather";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useContext(
    CartContext
  ) as CartContextType;

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  return (
    <div className="p-5 space-x-4">
      <div className="flex gap-4">
        <ShoppingCart />
        <Header>Shopping Cart</Header>
      </div>

      <br />
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Main Page
      </Link>
      <br />
      <ul className="my-8 flex flex-wrap gap-4">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <li key={index} className="">
              <ProductCard
                key={index}
                {...item}
                onDeleteCart={removeFromCart}
              />
            </li>
          ))
        )}
      </ul>

      <div className="flex justify-between gap-4">
        {cart.length > 0 && (
          <Button onClick={clearCart}>Clear all products</Button>
        )}

        <p className="mt-2 text-xl">Total: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default CartPage;
