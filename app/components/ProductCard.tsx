"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Product } from "../constants/Types";
import StarRating from "./StarRating";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isOutOfStock = product?.availability === "out of stock";

  return (
    <div
      className={`flex flex-col w-full max-w-[160px] md:max-w-[225px] min-h-[440px] md:min-h-[480px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-sm ${
        isOutOfStock ? "opacity-75" : ""
      }`}
    >
      <div className="flex flex-col flex-grow">
        <Image
          src={Array.isArray(product.image) ? product.image[1] : product.image}
          alt={product.name}
          width={255}
          height={331}
          className="w-full max-w-[190px] md:max-w-[255px] h-[240px] md:h-[331px] object-cover"
        />

        <div className="flex flex-col mt-4 px-2">
          <div className="text-display-2 font-semibold text-warm-black">
            <div>
              {product.name.length > 25
                ? `${product.name.slice(0, 25)}...`
                : product.name}
            </div>

            <div className="flex items-center justify-between mt-2">
              <StarRating rating={4} size={16} />
              <div className="mt-1">${product.price}</div>
            </div>
          </div>

          <div className="text-display-1 text-neutral-6 mt-3">
            {product.description?.length > 60
              ? `${product.description.slice(0, 60)}...`
              : product.description}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-2 pb-2 mt-4">
        <Button
          variant={isOutOfStock ? "disabled" : "border"}
          text={isOutOfStock ? "Out of stock" : "Add to cart"}
        />
      </div>
    </div>
  );
};

export default ProductCard;
