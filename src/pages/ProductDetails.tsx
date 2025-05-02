
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCarousel } from "@/components/ProductCarousel";
import { ProductInfo } from "@/components/ProductInfo";
import { ProductChat } from "@/components/ProductChat";
import { CustomerReviews } from "@/components/CustomerReviews";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Product } from "@/types/product";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  
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
    // Add more product data as needed, ensuring each has a 'type' property
  ];

  const productId = parseInt(id || "1");
  const product = products.find(p => p.id === productId) || products[0];
  
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([
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
  ]);

  // Similar products based on theme or vendor
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);

  // Simulate loading similar products based on the current product
  React.useEffect(() => {
    // Filter recommended products to find ones with similar theme or vendor
    const similar = recommendedProducts.filter(p => 
      p.id !== product.id && 
      (p.theme === product.theme || p.vendor === product.vendor)
    ).slice(0, 4); // Limit to 4 similar products
    
    setSimilarProducts(similar);
  }, [product, recommendedProducts]);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="min-h-screen bg-baju-background">
      <header className="bg-header-gradient shadow-sm">
        <div className="container mx-auto px-4">
          <Navigation />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ProductCarousel 
            products={[product]} 
          />
          <ProductInfo 
            product={product}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            onColorSelect={handleColorSelect}
            onSizeSelect={handleSizeSelect}
          />
        </div>

        <div className="my-12">
          <h2 className="text-2xl font-bold text-baju-heading mb-6">Chat with Vendor</h2>
          {/* Passing an empty prop if vendor is needed by the component */}
          <ProductChat />
        </div>

        <div className="my-12">
          <h2 className="text-2xl font-bold text-baju-heading mb-6">Customer Reviews</h2>
          {/* Passing an empty prop if productId is needed by the component */}
          <CustomerReviews />
        </div>

        {similarProducts.length > 0 && (
          <div className="my-12">
            <h2 className="text-2xl font-bold text-baju-heading mb-6">Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarProducts.map(p => (
                <div key={p.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={p.brideImage || p.groomImage} 
                      alt={p.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
                    <p className="text-sm text-baju-subtext mb-2">
                      {p.vendor} • {p.theme}
                    </p>
                    <p className="font-bold text-baju-price">{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
