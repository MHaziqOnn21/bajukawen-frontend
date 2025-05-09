import { useState } from "react";
import { NavigationLoggedIn } from "@/components/NavigationLoggedIn";
import { FiltersPanel, FilterOptions } from "@/components/FiltersPanel";
import { ProductGrid } from "@/components/ProductGrid";
import { VendorMap } from "@/components/VendorMap";
import { Footer } from "@/components/Footer";
import { Product } from "@/types/product";

const LoggedInIndex = () => {
  const username = "John";
  
  const allProducts = [
    {
      id: 1,
      name: "Royal Elegance Collection",
      description: "A stunning combination of traditional elegance and modern design. The bride dress features intricate lace work with a sweetheart neckline and full flowing skirt. The groom's attire complements with a sophisticated cut and subtle matching details. Perfect for a grand traditional wedding ceremony.",
      price: "MYR 2,800 / day",
      availability: "In Stock",
      brideImage: "https://images.unsplash.com/photo-1594552072238-5c4cefc1d033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      groomImage: "https://images.unsplash.com/photo-1596474220362-7a329973cb35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "Ivory and Champagne",
      material: "Premium Lace, Satin, and Tulle",
      size: "XS - XXL (Customizable)",
      vendor: "Elegant Bridal House",
      theme: "Traditional Elegance",
      type: "set" as const,
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1594552072238-5c4cefc1d033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride front view",
          type: "bride" as const
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1596474220362-7a329973cb35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom front view",
          type: "groom" as const
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
      theme: "Classic",
      type: "bride" as const,
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1566114725077-855347e7b6e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride front view",
          type: "bride" as const
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
      theme: "Contemporary",
      type: "groom" as const,
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom front view",
          type: "groom" as const
        }
      ]
    }
  ];

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleApplyFilters = (filters: FilterOptions) => {
    const filtered = allProducts.filter(product => {
      // Filter by product type
      if (filters.productType && filters.productType !== "" && 
          filters.productType !== "all" && 
          product.type !== filters.productType && 
          filters.productType !== "all") {
        return false;
      }
      
      // Filter by vendor
      if (filters.vendor && !product.vendor.toLowerCase().includes(filters.vendor.toLowerCase())) {
        return false;
      }
      
      // Filter by theme
      if (filters.theme && filters.theme !== "" && 
          filters.theme !== "all" && 
          !product.theme.toLowerCase().includes(filters.theme.toLowerCase())) {
        return false;
      }
      
      // Filter by color
      if (filters.color && filters.color !== "" && 
          filters.color !== "all" && 
          !product.color.toLowerCase().includes(filters.color.toLowerCase())) {
        return false;
      }
      
      // Filter by price (assuming price is in format "MYR X,XXX / day")
      if (filters.priceRange[0] > 0) {
        const priceMatch = product.price.match(/MYR\s+([\d,]+)/);
        if (priceMatch) {
          const price = parseInt(priceMatch[1].replace(/,/g, ''));
          if (price < filters.priceRange[0]) {
            return false;
          }
        }
      }
      
      // Filter by size
      if (filters.sizes.length > 0) {
        // This is simplified logic since we don't have detailed size data
        // In a real app, you might have specific sizes for each product
        const productSizes = product.size.split(', ');
        const hasSize = filters.sizes.some(size => 
          productSizes.includes(size) || product.size.includes("Customizable")
        );
        
        if (!hasSize) {
          return false;
        }
      }
      
      return true;
    });
    
    setFilteredProducts(filtered);
  };

  // Handle location changes from the VendorMap component
  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
  };

  return (
    <div className="min-h-screen bg-baju-background">
      <header className="bg-header-gradient shadow-sm">
        <div className="container mx-auto px-4">
          <NavigationLoggedIn username={username} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <FiltersPanel onApplyFilters={handleApplyFilters} />
          </div>
          <div className="md:col-span-3 space-y-8">
            <VendorMap 
              selectedLocation={selectedLocation}
              onLocationChange={handleLocationChange}
            />
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoggedInIndex;
