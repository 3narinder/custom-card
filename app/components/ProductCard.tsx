"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Product } from "../constants/Types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col md:w-[225px] w-[160px] min-h-[440px] md:min-h-[480px] cursor-pointer">
      <div className="flex flex-col flex-grow">
        <Image
          src={product?.image[1]}
          alt="product image"
          width={255}
          height={331}
          className="md:w-[255px] md:h-[331px] w-[190px] h-[240px] object-cover"
        />

        <div className="flex flex-col mt-4 px-2">
          <div className="text-display-2 font-semibold text-warm-black">
            <div>
              {product?.name?.length > 25
                ? `${product.name.slice(0, 25)}...`
                : product?.name}
            </div>
            <div className="mt-1">${product?.price}</div>
          </div>

          <div className="text-display-1 text-neutral-6 mt-3">
            {product?.description?.length > 60
              ? `${product.description.slice(0, 60)}...`
              : product?.description}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-2 pb-2 mt-4">
        <Button variant="border" text="ADD TO CART" />
        <Button variant="fill" text="ADD TO CART" />
      </div>
    </div>
  );
};

export default ProductCard;
