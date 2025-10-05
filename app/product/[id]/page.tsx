import { notFound } from "next/navigation";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { products } from "@/app/constants";
import StarRating from "@/app/components/StarRating";
import ProductActions from "@/app/components/ProductActions";
import ProductAccordion from "@/app/components/ProductAccordion";
import SectionHeading from "@/app/components/SectionHeading";
import ProductList from "@/app/components/ProductList";
import ProductImageGallery from "@/app/components/ProductImageGallery";
import Breadcrumb from "@/app/components/BreadCrumb";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products?.find((p) => p?.id?.toString() === id);

  if (!product) return notFound();

  return (
    <div className="lg:px-32 py-8 bg-neutral-2">
      <Breadcrumb productName={product.name} />
      <div className="mt-12 flex lg:flex-row lg:justify-start flex-col lg:gap-14 gap-12 lg:ml-0 mx-4">
        <ProductImageGallery images={product.image} alt={product.name} />
        <div className="flex flex-col">
          <h1 className="text-display-4 font-semibold uppercase text-warm-black tracking-wide">
            {product?.name}
          </h1>
          <div className="flex items-center mt-2">
            <StarRating rating={4} size={16} />
            <div className="text-display-2 text-neutral-7 ml-4">
              (1256 Reviews)
            </div>
            <div className="text-display-2 ml-12 flex">
              <span className="text-neutral-7">Stock :</span>
              <span
                className={`ml-1 ${
                  product.availability === "in stock"
                    ? "text-light-brown"
                    : "text-red-500"
                }`}
              >
                {product.availability}
              </span>
            </div>
          </div>
          <div className="flex gap-3 mt-2">
            <span className="text-display-6 text-neutral-6 tracking-wide">
              $500
            </span>
            <span className="text-display-6 text-neutral-8 tracking-wide">
              ${product?.price}
            </span>
          </div>
          <ProductActions product={product} />
          <div className="lg:mt-12 mt-8">
            <div className="text-display-3 font-semibold text-warm-black">
              Share this:
            </div>
            <div className="flex items-center gap-3 text-light-brown mt-2">
              <FaFacebookF className="text-lg cursor-pointer" />
              <FaTwitter className="text-lg cursor-pointer" />
              <AiFillInstagram className="text-lg cursor-pointer" />
              <FaLinkedinIn className="text-lg cursor-pointer" />
            </div>
          </div>
          <div className="lg:mt-12 mt-8">
            <ProductAccordion />
          </div>
        </div>
      </div>
      <div className="lg:py-20 py-12">
        <SectionHeading alignStart text="Similar items" />
        <ProductList grid4 limit={8} />
      </div>
    </div>
  );
}
