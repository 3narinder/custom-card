import React from "react";
import ProductList from "./components/ProductList";
import SectionHeading from "./components/SectionHeading";

const page = () => {
  return (
    <div className="lg:mx-32 lg:py-20 md:py-16 py-10">
      <SectionHeading text="best sellers" />

      <div className="lg:pl-12">
        <ProductList grid4 />
      </div>
    </div>
  );
};

export default page;
