
import { useState } from "react";
import { ProductCarousel, Product } from "@/components/ProductCarousel";
import { ProductInfo } from "@/components/ProductInfo";

const Index = () => {
  const products: Product[] = [
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
      size: "XS - XXL (Customizable)"
    },
    {
      id: 2,
      name: "Modern Minimalist Set",
      description: "For the contemporary couple who values simplicity and elegance. The bride dress features a sleek silhouette with minimal embellishments and clean lines. The groom's attire features a slim-fit design with modern tailoring techniques. This set is perfect for urban weddings and modern venues.",
      price: "MYR 2,200 / day",
      availability: "Limited Availability",
      brideImage: "https://images.unsplash.com/photo-1566114725077-855347e7b6e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      groomImage: "https://images.unsplash.com/photo-1597117303021-cb7e94649ebc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "Pure White and Charcoal",
      material: "Premium Crepe and Italian Wool",
      size: "XS - XXL (Customizable)"
    },
    {
      id: 3,
      name: "Garden Romance Collection",
      description: "Inspired by enchanted gardens, this collection features ethereal designs with floral elements. The bride's dress includes delicate floral appliqués and a soft flowing silhouette, while the groom's outfit incorporates subtle floral accents and a relaxed fit. Perfect for garden weddings and outdoor celebrations.",
      price: "MYR 2,500 / day",
      availability: "In Stock",
      brideImage: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      groomImage: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "Blush Pink and Sage",
      material: "Organza, Chiffon, and Linen Blend",
      size: "XS - XXL (Customizable)"
    }
  ];

  const [currentProduct, setCurrentProduct] = useState<Product>(products[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-baju-soft">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-baju-primary">BajuKawen.com</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-baju-primary transition-colors duration-200">Collections</a>
              <a href="#" className="text-gray-600 hover:text-baju-primary transition-colors duration-200">About Us</a>
              <a href="#" className="text-gray-600 hover:text-baju-primary transition-colors duration-200">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <ProductCarousel 
            products={products} 
            onProductChange={setCurrentProduct} 
          />
          <ProductInfo product={currentProduct} />
        </div>
      </main>

      <footer className="bg-white mt-24 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-baju-primary font-medium text-lg mb-2">BajuKawen.com</p>
            <p className="text-gray-500 text-sm">Making your special day even more memorable with our premium wedding attire rentals.</p>
            <p className="text-gray-400 text-xs mt-6">© 2025 BajuKawen.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
