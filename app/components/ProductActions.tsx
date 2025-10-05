"use client";

import { useState } from "react";
import ColorSelector from "./ColorSelector";
import CartActions from "./CartActions";
import { Product } from "../constants/Types";

const colors = [
  { name: "Gray", code: "#808080" },
  { name: "White", code: "#ffffff" },
  { name: "Black", code: "#000000" },
  { name: "Brown", code: "#A0522D" },
  { name: "Pink", code: "#FFB6B3" },
  { name: "DarkGreen", code: "#006400" },
];

interface ProductCardProps {
  product: Product;
}

const ProductActions = ({ product }: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="lg:mt-12 mt-8">
      <ColorSelector
        colors={colors}
        selectedColor={selectedColor}
        onSelect={setSelectedColor}
      />

      <CartActions product={product} />
    </div>
  );
};

export default ProductActions;
