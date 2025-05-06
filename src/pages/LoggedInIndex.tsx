
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

// Sample reviews data for customer reviews component
const mockReviews = [
  {
    id: 1,
    customerName: "Sarah Johnson",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    rating: 5,
    date: "April 15, 2025",
    comment: "Absolutely stunning wedding attire! The quality exceeded my expectations and the fit was perfect. I received so many compliments on our special day."
  },
  {
    id: 2,
    customerName: "Michael Chen",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 4.5,
    date: "April 2, 2025",
    comment: "Beautiful craftsmanship and the material is extremely high quality. The dress arrived earlier than expected. The only reason for 4.5 stars is that we needed minimal alterations for a perfect fit."
  },
  {
    id: 3,
    customerName: "Jessica Rodriguez",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    rating: 5,
    date: "March 28, 2025",
    comment: "We rented this set for our pre-wedding photoshoot and it was absolutely worth it. The details and embellishments looked amazing in our photos. Highly recommend!"
  }
];

// Sample carousel products
const carouselProducts = [
  {
    id: 1,
    name: "Royal Elegance Collection",
    description: "A stunning combination of traditional elegance and modern design.",
    price: "MYR 2,800 / day",
    availability: "In Stock",
    brideImage: "https://images.unsplash.com/photo-1594552072238-5c4cefc1d033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    groomImage: "https://images.unsplash.com/photo-1596474220362-7a329973cb35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    color: "Ivory and Champagne",
    material: "Premium Lace, Satin, and Tulle",
    size: "XS - XXL (Customizable)",
    vendor: "Elegant Bridal House",
    theme: "Traditional Elegance",
    type: "set"
  },
  {
    id: 2,
    name: "Modern Minimalist Set",
    description: "For the contemporary couple who values simplicity and elegance.",
    price: "MYR 2,200 / day",
    availability: "Limited Availability",
    brideImage: "https://images.unsplash.com/photo-1566114725077-855347e7b6e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    groomImage: "https://images.unsplash.com/photo-1597117303021-cb7e94649ebc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    color: "Pure White and Charcoal",
    material: "Premium Crepe and Italian Wool",
    size: "XS - XXL (Customizable)",
    vendor: "Chic Weddings Boutique",
    theme: "Modern Simplicity",
    type: "set"
  }
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
  const [selectedCarouselProduct, setSelectedCarouselProduct] = useState(carouselProducts[0]);

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
      <NavigationLoggedIn username="User" />

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <ProductCarousel 
            products={carouselProducts} 
            onProductChange={setSelectedCarouselProduct} 
          />
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
          <CustomerReviews reviews={mockReviews} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
