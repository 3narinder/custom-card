"use client";
import React, { Suspense, useState, useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { products } from "../constants";

const ProductCard = dynamic(() => import("./ProductCard"), {
  loading: () => (
    <div className="h-96 bg-neutral-2 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-neutral-8"></div>
    </div>
  ),
  ssr: false,
});

interface ProductListProps {
  limit?: number;
  grid4?: boolean;
}

const ProductList = ({ limit = products.length, grid4 }: ProductListProps) => {
  const [displayedProducts, setDisplayedProducts] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayedProducts < limit) {
          setIsLoading(true);
          setTimeout(() => {
            setDisplayedProducts((prev) => Math.min(prev + 8, limit));
            setIsLoading(false);
          }, 1000); // 1-second delay for demo purposes
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef?.current);
      }
    };
  }, [displayedProducts, limit]);

  return (
    <div>
      <div
        className={`grid ${
          grid4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        } 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-12 md:gap-8 gap-12 lg:px-0 px-4 justify-center`}
      >
        {products?.slice(0, displayedProducts).map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <Suspense
              fallback={
                <div className="h-64 flex items-center justify-center">
                  Loading...
                </div>
              }
            >
              <ProductCard product={product} />
            </Suspense>
          </Link>
        ))}
      </div>
      {displayedProducts < limit && (
        <div ref={observerRef} className="flex justify-center py-8">
          {isLoading && (
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-neutral-8"></div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;
