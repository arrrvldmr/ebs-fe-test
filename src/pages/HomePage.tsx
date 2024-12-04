import React, { useContext, useState } from "react";
import ProductCard from "../components/ProdCard";
import { CartContext, CartContextType } from "../context/CartContext";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Product } from "../types/Product";

const HomePage: React.FC = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const { addToCart } = useContext(CartContext) as CartContextType;

  const [categoryFilter, setCategoryFilter] = useState<string>("");

  const handleAddToCart = (payload: Product) => {
    addToCart(payload);
  };

  const filteredProducts = categoryFilter
    ? data.filter((product) => product.category === categoryFilter)
    : data;

  return (
    <div className="text-center space-y-4 p-5">
      <Header>Enjoy your shopping with us!</Header>
      <h1>Product Catalog</h1>
      <div className="justify-center flex  gap-4">
        <Link
          to="/cart"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          My Shopping Cart
        </Link>

        <select
          className="bg-gray-500 border border-gray-300 rounded-md p-2"
          onChange={(e) => setCategoryFilter(e.target.value)}
          defaultValue=""
        >
          <option className="bg-gray-500" value="">
            All Categories
          </option>
          <option className="bg-gray-500" value="electronics">
            Electronics
          </option>
          <option className="bg-gray-500" value="jewelery">
            Jewelery
          </option>
          <option className="bg-gray-500" value="men's clothing">
            Men's Clothing
          </option>
          <option className="bg-gray-500" value="women's clothing">
            Women's Clothing
          </option>
        </select>
      </div>

      <div className="justify-center flex  flex-wrap gap-8">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
