import React, { useState, useEffect } from "react";
import { NavigationLoggedIn } from "@/components/NavigationLoggedIn";
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
    id: "1",
    name: "Elegant Wedding Dress",
    price: 899,
    imageUrl: "/images/dress1.jpg",
    type: "Dress",
    location: "Kuala Lumpur",
  },
  {
    id: "2",
    name: "Classic Tuxedo Suit",
    price: 549,
    imageUrl: "/images/suit1.jpg",
    type: "Suit",
    location: "Subang",
  },
  {
    id: "3",
    name: "Designer Bridal Gown",
    price: 1299,
    imageUrl: "/images/dress2.jpg",
    type: "Dress",
    location: "Ampang",
  },
  {
    id: "4",
    name: "Slim Fit Men's Suit",
    price: 499,
    imageUrl: "/images/suit2.jpg",
    type: "Suit",
    location: "Kuala Lumpur",
  },
  {
    id: "5",
    name: "Luxury Wedding Dress",
    price: 1599,
    imageUrl: "/images/dress3.jpg",
    type: "Dress",
    location: "Subang",
  },
  {
    id: "6",
    name: "Formal Black Tie Suit",
    price: 699,
    imageUrl: "/images/suit3.jpg",
    type: "Suit",
    location: "Ampang",
  },
  {
    id: "7",
    name: "A-Line Wedding Dress",
    price: 999,
    imageUrl: "/images/dress4.jpg",
    type: "Dress",
    location: "Kuala Lumpur",
  },
  {
    id: "8",
    name: "Modern Cut Suit",
    price: 599,
    imageUrl: "/images/suit4.jpg",
    type: "Suit",
    location: "Subang",
  },
  {
    id: "9",
    name: "Ballgown Wedding Dress",
    price: 1399,
    imageUrl: "/images/dress5.jpg",
    type: "Dress",
    location: "Ampang",
  },
  {
    id: "10",
    name: "Three-Piece Suit",
    price: 749,
    imageUrl: "/images/suit5.jpg",
    type: "Suit",
    location: "Kuala Lumpur",
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

export default function LoggedInIndex() {
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
      <NavigationLoggedIn />

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
