import { Navigation } from "@/components/Navigation";
import { Filters } from "@/components/Filters";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-baju-background">
      <header className="bg-header-gradient shadow-sm">
        <div className="container mx-auto px-4">
          <Navigation />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        <Filters />
        <ProductGrid products={products} />
      </main>

      <footer className="bg-white mt-24 py-12 border-t border-baju-input-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-baju-heading font-medium text-lg mb-2">BajuKawen.com</p>
            <p className="text-baju-footer text-sm">
              Making your special day even more memorable with our premium wedding attire rentals.
            </p>
            <p className="text-baju-footer text-xs mt-6">
              © 2025 BajuKawen.com. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
