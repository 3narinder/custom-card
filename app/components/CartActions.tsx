"use client";

import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import Button from "./Button";
import QuantityCounter from "./QuantityCounter";
import { Product } from "../constants/Types";

interface ProductCardProps {
  product: Product;
}

const CartActions = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);

  const isOutOfStock = product?.availability === "out of stock";

  return (
    <div className="flex flex-col gap-4 lg:mt-12 mt-8">
      <div className="flex items-center gap-4">
        <QuantityCounter quantity={quantity} onChange={setQuantity} />
        <Button
          variant={isOutOfStock ? "disabled" : "fill"}
          text={isOutOfStock ? "Out of stock" : "ADD TO CART"}
        />
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant={isOutOfStock ? "disabled" : "border"}
          text={isOutOfStock ? "Out of stock" : "BYU NOW"}
        />
        <div className="border p-[5px] cursor-pointer">
          <CiHeart className="text-2xl text-neutral-8" />
        </div>
      </div>
    </div>
  );
};

export default CartActions;
