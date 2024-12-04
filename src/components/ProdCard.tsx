import React from "react";
import Button from "./Button";
import { Product } from "../types/Product";
import { DollarSign, Layers } from 'react-feather';

interface ProductCardProps {
  onAddToCart?: (payload: Product) => void;
  onDeleteCart?: (id: number) => void
}

const ProductCard: React.FC<Product & ProductCardProps > = ({
  id,
  title,
  price,
  image,
  category,
  onAddToCart,
  onDeleteCart
}) => {
  return (
    <div className="w-[300px] h-[370px] rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-[300px] h-[200px] object-cover" />
      <div className="border p-3 space-y-2  rounded-b-lg">
        <h3 className="truncate">{title}</h3>
        <p className="flex gap-1 capitalize"><Layers />{category}</p>
        <p className="flex gap-1"><DollarSign />{price}</p>
        {
          onAddToCart && <div className="flex justify-end">
          <Button onClick={() => onAddToCart({id, title, price, image, category})}>Add to Cart</Button>
        </div>
        }
       
        {
          onDeleteCart && <div className="flex justify-end">
            <Button onClick={() => onDeleteCart(id)}>Remove</Button>
            </div>
        }
        </div>
      
    </div>
  );
};

export default ProductCard;
