import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { ProductCarousel } from "@/components/ProductCarousel";
import { ProductInfo } from "@/components/ProductInfo";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Product } from "@/components/ProductCarousel";

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // This would typically come from an API, using static data for now
  const products = [
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
      theme: "Traditional Elegance"
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
      size: "XS - XXL (Customizable)",
      vendor: "Chic Weddings Boutique",
      theme: "Modern Simplicity"
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
      size: "XS - XXL (Customizable)",
      vendor: "Floral Dreams Bridal",
      theme: "Ethereal Garden"
    }
  ];

  // Find the product based on the URL parameter
  useState(() => {
    const product = products.find(p => p.id === Number(id));
    if (product) {
      setSelectedProduct(product);
    }
  });

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-baju-background">
      <header className="bg-header-gradient shadow-sm">
        <div className="container mx-auto px-4">
          <Navigation />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8">
          <ProductCarousel
            products={[selectedProduct]}
            onProductChange={(product) => setSelectedProduct(product)}
          />
          <ProductInfo product={selectedProduct} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
