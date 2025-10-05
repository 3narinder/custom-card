"use client";
import React from "react";
import SectionHeading from "./components/SectionHeading";
import ProductList from "./components/ProductList";

const Page = () => {
  return (
    <div className="min-h-screen bg-neutral-2 transition-colors duration-300">
      <div className="lg:mx-32 lg:py-20 md:py-16 py-10">
        <SectionHeading text="best sellers" />
        <div className="lg:pl-12">
          <ProductList grid4 />
        </div>
      </div>
    </div>
  );
};

export default Page;
