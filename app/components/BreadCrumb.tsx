"use client";
import Link from "next/link";

interface BreadcrumbProps {
  productName?: string;
}

const Breadcrumb = ({ productName }: BreadcrumbProps) => {
  return (
    <nav className="text-sm text-neutral-6 mb-4">
      <ul className="flex items-center gap-2 lg:ml-0 ml-4">
        <li>
          <Link href="/" className="hover:text-warm-black">
            Home
          </Link>
        </li>
        {productName && (
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <span className="text-neutral-8 font-medium">{productName}</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
