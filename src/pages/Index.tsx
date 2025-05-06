import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCarousel } from "@/components/ProductCarousel";
import { FiltersPanel } from "@/components/FiltersPanel";
import { ProductGrid } from "@/components/ProductGrid";
import { CustomerReviews } from "@/components/CustomerReviews";
import { VendorMap } from "@/components/VendorMap";
import { ProductType } from "@/types/product";

// Mock products data
const products = [
  {
    id: 1,
    name: "Elegant Wedding Dress",
    price: 850,
    imageUrl: "/images/dress1.jpg",
    type: "Dress",
    location: "Kuala Lumpur",
  },
  {
    id: 2,
    name: "Classic Tuxedo Suit",
    price: 600,
    imageUrl: "/images/suit1.jpg",
    type: "Suit",
    location: "Subang",
  },
  {
    id: 3,
    name: "Designer Bridal Gown",
    price: 1200,
    imageUrl: "/images/dress2.jpg",
    type: "Dress",
    location: "Ampang",
  },
  {
    id: 4,
    name: "Slim Fit Men's Suit",
    price: 700,
    imageUrl: "/images/suit2.jpg",
    type: "Suit",
    location: "Petaling Jaya",
  },
  {
    id: 5,
    name: "Lace Wedding Dress",
    price: 950,
    imageUrl: "/images/dress3.jpg",
    type: "Dress",
    location: "Shah Alam",
  },
  {
    id: 6,
    name: "Formal Black Suit",
    price: 650,
    imageUrl: "/images/suit3.jpg",
    type: "Suit",
    location: "Kuala Lumpur",
  },
  {
    id: 7,
    name: "Satin Bridal Dress",
    price: 1100,
    imageUrl: "/images/dress4.jpg",
    type: "Dress",
    location: "Subang",
  },
  {
    id: 8,
    name: "Modern Cut Suit",
    price: 750,
    imageUrl: "/images/suit4.jpg",
    type: "Suit",
    location: "Ampang",
  },
  {
    id: 9,
    name: "Beaded Wedding Gown",
    price: 1300,
    imageUrl: "/images/dress5.jpg",
    type: "Dress",
    location: "Petaling Jaya",
  },
  {
    id: 10,
    name: "Grey Business Suit",
    price: 800,
    imageUrl: "/images/suit5.jpg",
    type: "Suit",
    location: "Shah Alam",
  },
];

// Filter function for products
function getFilteredProducts(
  products,
  priceRange,
  productType,
  searchQuery,
  location
) {
  return products.filter((product) => {
    // Price filter
    if (
      priceRange.length > 0 &&
      (product.price < priceRange[0] || product.price > priceRange[1])
    ) {
      return false;
    }

    // Location filter
    if (
      location &&
      product.location &&
      !product.location.toLowerCase().includes(location.toLowerCase())
    ) {
      return false;
    }

    // Type filter
    if (
      productType !== "" &&
      productType !== "all" &&
      product.type !== productType
    ) {
      return false;
    }

    // Search filter
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
  });
}

export default function Index() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [productType, setProductType] = useState<ProductType | string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const filteredProducts = getFilteredProducts(
    products,
    priceRange,
    productType,
    searchQuery,
    location
  );

  // Filter products function
  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case "price":
        setPriceRange(value);
        break;
      case "type":
        setProductType(value);
        break;
      case "search":
        setSearchQuery(value);
        break;
      case "location":
        setLocation(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-baju-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <ProductCarousel />
        </section>

        <section className="mb-12">
          <FiltersPanel
            priceRange={priceRange}
            productType={productType as ProductType}
            searchQuery={searchQuery}
            location={location}
            onFilterChange={handleFilterChange}
          />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-baju-heading mb-6">
            {searchQuery
              ? `Search Results for "${searchQuery}"`
              : productType && productType !== ""
                ? `${productType === "all" ? "All" : productType} Products`
                : "Featured Products"}
          </h2>
          <ProductGrid products={filteredProducts} />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-baju-heading mb-6">
            Our Locations
          </h2>
          <VendorMap selectedLocation={location} onLocationChange={(value) => handleFilterChange("location", value)} />
        </section>

        <section>
          <CustomerReviews />
        </section>
      </main>

      <Footer />
    </div>
  );
}
