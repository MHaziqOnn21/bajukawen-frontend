import React, { useState, useMemo } from "react";
import { ProductCard } from "@/components/ProductCard";
import { FiltersPanel, FilterOptions } from "@/components/FiltersPanel";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Product } from "@/types/product";

const LoggedInIndex: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    productType: "",
    vendor: "",
    location: "",
    theme: "",
    color: "",
    priceRange: [0],
    sizes: []
  });

  // Demo products for the page
  const products: Product[] = [
    {
      id: 1,
      name: "Royal Elegance Collection",
      description: "A stunning combination of traditional elegance and modern design...",
      price: "MYR 2,800 / day",
      availability: "In Stock",
      brideImage: "https://images.unsplash.com/photo-1594552072238-5c4cefc1d033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      groomImage: "https://images.unsplash.com/photo-1596474220362-7a329973cb35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "Ivory and Champagne",
      material: "Premium Lace, Satin, and Tulle",
      size: "XS - XXL (Customizable)",
      vendor: "Elegant Bridal House",
      theme: "Traditional Elegance",
      type: "set",
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1594552072238-5c4cefc1d033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride front view",
          type: "bride"
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1596474220362-7a329973cb35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom front view",
          type: "groom"
        }
      ]
    },
    {
      id: 2,
      name: "Classic Bridal Gown",
      description: "An elegant bridal gown with intricate lace details and a sweeping train.",
      price: "MYR 1,800 / day",
      availability: "In Stock",
      brideImage: "https://images.unsplash.com/photo-1566114725077-855347e7b6e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      groomImage: "",
      color: "Pure White",
      material: "Premium Lace and Silk",
      size: "XS - XXL (Customizable)",
      vendor: "Elegant Bridal House",
      theme: "Classic Vintage",
      type: "bride",
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1566114725077-855347e7b6e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride front view",
          type: "bride"
        }
      ]
    },
    {
      id: 3,
      name: "Modern Groom Suit",
      description: "A contemporary suit featuring clean lines and premium tailoring.",
      price: "MYR 1,500 / day",
      availability: "In Stock",
      brideImage: "",
      groomImage: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "Charcoal Grey",
      material: "Italian Wool",
      size: "XS - XXL (Customizable)",
      vendor: "Modern Menswear",
      theme: "Modern Simplicity",
      type: "groom",
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom front view",
          type: "groom"
        }
      ]
    },
    {
      id: 4,
      name: "Ethereal Garden Bride",
      description: "A dreamy bridal gown inspired by garden aesthetics with floral embellishments.",
      price: "MYR 2,200 / day",
      availability: "In Stock",
      brideImage: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      groomImage: "",
      color: "Ivory with Floral Accents",
      material: "Chiffon, Lace, and Organza",
      size: "XS - XXL (Customizable)",
      vendor: "Floral Dreams Bridal",
      theme: "Ethereal Garden",
      type: "bride",
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride front view",
          type: "bride"
        }
      ]
    },
    {
      id: 5,
      name: "Beach Romance Set",
      description: "A light and airy matching set perfect for beach weddings.",
      price: "MYR 2,500 / day",
      availability: "In Stock",
      brideImage: "https://images.unsplash.com/photo-1546804784-896d0dca3805?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      groomImage: "https://images.unsplash.com/photo-1597999060200-1d9c590a335d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "Ivory and Beige",
      material: "Lightweight Cotton and Chiffon",
      size: "XS - XXL (Customizable)",
      vendor: "Coastal Ceremonies",
      theme: "Beach Romance",
      type: "set",
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1546804784-896d0dca3805?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride front view",
          type: "bride"
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1597999060200-1d9c590a335d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom front view",
          type: "groom"
        }
      ]
    },
    {
      id: 6,
      name: "Royal Wedding Attire",
      description: "An opulent set fit for royalty with exquisite detailing.",
      price: "MYR 3,500 / day",
      availability: "In Stock",
      brideImage: "https://images.unsplash.com/photo-1583187855710-db7596d1e871?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      groomImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "Gold and Ivory",
      material: "Luxury Satin, Silk, and Crystal Embellishments",
      size: "XS - XXL (Customizable)",
      vendor: "Royal Wedding Emporium",
      theme: "Royal Elegance",
      type: "set",
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1583187855710-db7596d1e871?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride front view",
          type: "bride"
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom front view",
          type: "groom"
        }
      ]
    },
    {
      id: 7,
      name: "Bohemian Bride",
      description: "A free-spirited bridal gown with natural elements and relaxed silhouette.",
      price: "MYR 1,900 / day",
      availability: "In Stock",
      brideImage: "https://images.unsplash.com/photo-1595945722526-25e783f0ebd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      groomImage: "",
      color: "Cream with Earth Tones",
      material: "Natural Fabrics, Lace, and Macramé",
      size: "XS - XXL (Customizable)",
      vendor: "Boho Bridal Co",
      theme: "Bohemian Nature",
      type: "bride",
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1595945722526-25e783f0ebd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride front view",
          type: "bride"
        }
      ]
    },
    {
      id: 8,
      name: "Metropolitan Elegance",
      description: "A sleek, urban-inspired wedding set with contemporary design elements.",
      price: "MYR 2,800 / day",
      availability: "In Stock",
      brideImage: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      groomImage: "https://images.unsplash.com/photo-1594938374182-a57061752344?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "White and Black",
      material: "Contemporary Fabrics with Minimalist Design",
      size: "XS - XXL (Customizable)",
      vendor: "Metropolitan Wedding Studio",
      theme: "Modern Urban",
      type: "set",
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride front view",
          type: "bride"
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1594938374182-a57061752344?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom front view",
          type: "groom"
        }
      ]
    }
  ];

  const handleApplyFilters = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Filter by product type (set, bride, groom)
      if (filters.productType && filters.productType !== "all" && product.type !== filters.productType) {
        return false;
      }

      // Filter by vendor
      if (filters.vendor && !product.vendor.toLowerCase().includes(filters.vendor.toLowerCase())) {
        return false;
      }

      // Filter by theme
      if (filters.theme && filters.theme !== "all-themes" && !product.theme.toLowerCase().includes(filters.theme.toLowerCase())) {
        return false;
      }

      // Filter by color
      if (filters.color && filters.color !== "all-colors" && !product.color.toLowerCase().includes(filters.color.toLowerCase())) {
        return false;
      }
      
      // Filter by size
      if (filters.sizes && filters.sizes.length > 0) {
        const hasMatchingSize = filters.sizes.some(size => 
          product.size.includes(size)
        );
        if (!hasMatchingSize) return false;
      }
      
      // Filter by price
      if (filters.priceRange && filters.priceRange.length > 0) {
        const maxPrice = filters.priceRange[0];
        const productPrice = parseInt(product.price.split(' ')[1].replace(',', ''), 10);
        if (productPrice > maxPrice) return false;
      }

      return true;
    });
  }, [products, filters]);

  return (
    <div className="min-h-screen bg-baju-background">
      <header className="bg-header-gradient shadow-sm">
        <div className="container mx-auto px-4">
          <Navigation />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <FiltersPanel onApplyFilters={handleApplyFilters} />
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-baju-heading mb-6">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoggedInIndex;
