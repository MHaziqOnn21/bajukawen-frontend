import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { ProductCarousel } from "@/components/ProductCarousel";
import { ProductInfo } from "@/components/ProductInfo";
import { ProductChat } from "@/components/ProductChat";
import { CustomerReviews, Review } from "@/components/CustomerReviews";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Product, ProductImage, ProductType } from "@/types/product";

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { toast } = useToast();
  
  const bookedDates = [
    new Date(2025, 3, 15),
    new Date(2025, 3, 20),
    new Date(2025, 3, 25),
    new Date(2025, 4, 5),
    new Date(2025, 4, 10),
  ];
  
  const reviews: Review[] = [
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
    },
    {
      id: 4,
      customerName: "David Thompson",
      rating: 4,
      date: "March 15, 2025",
      comment: "Great service and beautiful attire. The colors were exactly as shown in the photos. Delivery was prompt and everything arrived in perfect condition."
    }
  ];

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
      size: "XS - XXL (Customizable)",
      vendor: "Elegant Bridal House",
      theme: "Traditional Elegance",
      type: "set",
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1594552072238-5c4cefc1d033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride dress front view",
          type: "bride" as const
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1596474220362-7a329973cb35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom attire front view",
          type: "groom" as const
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1583767218521-125a0b51ea35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride and groom together",
          type: "couple" as const
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Detail view of dress embroidery",
          type: "detail" as const
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1595731379096-7c9ed678c94a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride dress back view",
          type: "bride" as const
        },
        {
          id: 6,
          url: "https://images.unsplash.com/photo-1600091166971-7dcb86fadd27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom attire side view",
          type: "groom" as const
        }
      ]
    },
    {
      id: 2,
      name: "Modern Minimalist Set",
      description: "For the contemporary couple who values simplicity and elegance. The bride dress features a sleek silhouette with minimal embellishments and clean lines. The groom's outfit features a slim-fit design with modern tailoring techniques. This set is perfect for urban weddings and modern venues.",
      price: "MYR 2,200 / day",
      availability: "Limited Availability",
      brideImage: "https://images.unsplash.com/photo-1566114725077-855347e7b6e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      groomImage: "https://images.unsplash.com/photo-1597117303021-cb7e94649ebc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "Pure White and Charcoal",
      material: "Premium Crepe and Italian Wool",
      size: "XS - XXL (Customizable)",
      vendor: "Chic Weddings Boutique",
      theme: "Modern Simplicity",
      type: "set",
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1566114725077-855347e7b6e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride dress front view",
          type: "bride"
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1597117303021-cb7e94649ebc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom attire front view",
          type: "groom"
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1610117238596-8b79d4ab3667?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride and groom together",
          type: "couple"
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Detail view of suit",
          type: "detail"
        }
      ]
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
      theme: "Ethereal Garden",
      type: "set",
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride dress front view",
          type: "bride"
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom attire front view",
          type: "groom"
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Detail view of dress embroidery",
          type: "detail"
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1595731379096-7c9ed678c94a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride dress back view",
          type: "bride"
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1600091166971-7dcb86fadd27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom attire side view",
          type: "groom"
        }
      ]
    },
    {
      id: 4,
      name: "Vintage Glamour Set",
      description: "A timeless collection inspired by the golden age of Hollywood. Features a vintage-style bride dress with intricate beadwork and a classic fitted groom's suit. Perfect for couples wanting to capture the essence of old-world charm.",
      price: "MYR 3,200 / day",
      availability: "Limited Availability",
      brideImage: "https://images.unsplash.com/photo-1595731379096-7c9ed678c94a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      groomImage: "https://images.unsplash.com/photo-1600091166971-7dcb86fadd27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "Pearl White and Classic Black",
      material: "Vintage Lace, Pearl Beading, Italian Wool",
      size: "XS - XXL (Customizable)",
      vendor: "Vintage Vows Boutique",
      theme: "Classic Vintage",
      type: "set",
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1595731379096-7c9ed678c94a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride dress front view",
          type: "bride"
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1600091166971-7dcb86fadd27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom attire front view",
          type: "groom"
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Detail view of dress embroidery",
          type: "detail"
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1595731379096-7c9ed678c94a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride dress back view",
          type: "bride"
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1600091166971-7dcb86fadd27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom attire side view",
          type: "groom"
        }
      ]
    },
    {
      id: 5,
      name: "Coastal Dreams Collection",
      description: "Inspired by the serene beauty of beach weddings, this collection features lightweight, flowing fabrics and relaxed silhouettes. The bride's dress captures the essence of ocean waves while the groom's attire maintains a casual yet sophisticated beach-appropriate style.",
      price: "MYR 2,400 / day",
      availability: "In Stock",
      brideImage: "https://images.unsplash.com/photo-1610117238596-8b79d4ab3667?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      groomImage: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "Ocean Blue and Sandy Beige",
      material: "Chiffon, Light Linen, Natural Fibers",
      size: "XS - XXL (Customizable)",
      vendor: "Coastal Ceremonies",
      theme: "Beach Romance",
      type: "set",
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1610117238596-8b79d4ab3667?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride dress front view",
          type: "bride"
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom attire front view",
          type: "groom"
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Detail view of dress embroidery",
          type: "detail"
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1595731379096-7c9ed678c94a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride dress back view",
          type: "bride"
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1600091166971-7dcb86fadd27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom attire side view",
          type: "groom"
        }
      ]
    },
    {
      id: 6,
      name: "Royal Heritage Collection",
      description: "A majestic collection that pays homage to royal wedding traditions. The bride's gown features a cathedral-length train and ornate embroidery, while the groom's ensemble includes regal details and premium materials.",
      price: "MYR 3,800 / day",
      availability: "Limited Availability",
      brideImage: "https://images.unsplash.com/photo-1583767218521-125a0b51ea35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      groomImage: "https://images.unsplash.com/photo-1594552072238-5c4cefc1d033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "Royal Purple and Gold",
      material: "Royal Silk, Gold Thread Embroidery, Premium Velvet",
      size: "XS - XXL (Customizable)",
      vendor: "Royal Wedding Emporium",
      theme: "Royal Elegance",
      type: "set",
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1583767218521-125a0b51ea35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride dress front view",
          type: "bride"
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1594552072238-5c4cefc1d033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom attire front view",
          type: "groom"
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Detail view of dress embroidery",
          type: "detail"
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1595731379096-7c9ed678c94a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride dress back view",
          type: "bride"
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1600091166971-7dcb86fadd27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom attire side view",
          type: "groom"
        }
      ]
    },
    {
      id: 7,
      name: "Bohemian Spirit Collection",
      description: "Perfect for free-spirited couples, this collection embodies the bohemian lifestyle with relaxed silhouettes and nature-inspired details. Features unique handcrafted elements and comfortable, flowing designs.",
      price: "MYR 2,300 / day",
      availability: "In Stock",
      brideImage: "https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      groomImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "Earth Tones and Natural Whites",
      material: "Organic Cotton, Natural Lace, Hemp Blend",
      size: "XS - XXL (Customizable)",
      vendor: "Boho Bridal Co",
      theme: "Bohemian Nature",
      type: "set",
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride dress front view",
          type: "bride"
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom attire front view",
          type: "groom"
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Detail view of dress embroidery",
          type: "detail"
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1595731379096-7c9ed678c94a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride dress back view",
          type: "bride"
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1600091166971-7dcb86fadd27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom attire side view",
          type: "groom"
        }
      ]
    },
    {
      id: 8,
      name: "Urban Chic Collection",
      description: "A contemporary collection designed for the modern couple. Clean lines, minimalist details, and architectural influences create a sophisticated urban aesthetic perfect for city weddings.",
      price: "MYR 2,600 / day",
      availability: "In Stock",
      brideImage: "https://images.unsplash.com/photo-1596553495793-27d7139cb33f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      groomImage: "https://images.unsplash.com/photo-1592878940526-0214b0f374f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "Modern White and Slate Gray",
      material: "Tech Fabric, Modern Crepe, Performance Wool",
      size: "XS - XXL (Customizable)",
      vendor: "Metropolitan Wedding Studio",
      theme: "Modern Urban",
      type: "set",
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1596553495793-27d7139cb33f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride dress front view",
          type: "bride"
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1592878940526-0214b0f374f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom attire front view",
          type: "groom"
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Detail view of dress embroidery",
          type: "detail"
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1595731379096-7c9ed678c94a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Bride dress back view",
          type: "bride"
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1600091166971-7dcb86fadd27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Groom attire side view",
          type: "groom"
        }
      ]
    }
  ];

  useEffect(() => {
    const product = products.find(p => p.id === Number(id));
    if (product) {
      setSelectedProduct(product);
      if (product.color) {
        setSelectedColor(product.color.split(" and ")[0].trim());
      }
      if (product.size) {
        const sizes = product.size.includes("-") ? 
          product.size.split("-")[0].trim() : 
          product.size.split(" ")[0].trim();
        setSelectedSize(sizes);
      }
    }
  }, [id]);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const isDateBooked = (date: Date) => {
    return bookedDates.some(
      (bookedDate) =>
        bookedDate.getFullYear() === date.getFullYear() &&
        bookedDate.getMonth() === date.getMonth() &&
        bookedDate.getDate() === date.getDate()
    );
  };
  
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    toast({
      title: "Color selected",
      description: `You've selected ${color}`,
      duration: 2000,
    });
  };
  
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    toast({
      title: "Size selected",
      description: `You've selected size ${size}`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-baju-background">
      <header className="bg-header-gradient shadow-sm">
        <div className="container mx-auto px-4">
          <Navigation />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-8">
            <ProductCarousel
              products={[selectedProduct]}
              onProductChange={(product) => setSelectedProduct(product)}
            />
            <ProductInfo 
              product={selectedProduct}
              selectedDate={selectedDate}
              onColorSelect={handleColorSelect}
              onSizeSelect={handleSizeSelect}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
            />
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-baju-heading mb-4">Check Availability</h2>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => {
                      return (
                        date < new Date() || // Disable past dates
                        isDateBooked(date)   // Disable booked dates
                      );
                    }}
                    modifiers={{
                      booked: bookedDates
                    }}
                    modifiersStyles={{
                      booked: {
                        backgroundColor: "#FEE2E2",
                        color: "#EF4444",
                        fontWeight: "bold"
                      }
                    }}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
              
              <div className="mt-8">
                <Button 
                  className="bg-gradient-to-b from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading border-none"
                  disabled={!selectedDate || !selectedColor || !selectedSize}
                  onClick={() => {
                    toast({
                      title: "Booking Confirmed!",
                      description: `You've booked ${selectedProduct.name} in ${selectedColor}, size ${selectedSize} for ${selectedDate ? format(selectedDate, 'PPP') : ''}`,
                      duration: 5000,
                    });
                  }}
                >
                  Book Now
                </Button>
              </div>
            </div>
            
            <CustomerReviews reviews={reviews} />
          </div>
        </div>
      </main>

      <Footer />
      <ProductChat product={selectedProduct} />
    </div>
  );
};

export default ProductDetails;
