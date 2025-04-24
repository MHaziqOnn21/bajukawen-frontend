import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  availability: string;
  brideImage: string;
  groomImage: string;
  color: string;
  material: string;
  size: string;
  vendor: string;
  theme: string;
}

interface ProductCarouselProps {
  products: Product[];
  onProductChange: (product: Product) => void;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  onProductChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    onProductChange(products[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex === products.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    onProductChange(products[newIndex]);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative h-[450px] overflow-hidden rounded-lg">
          <img
            src={products[currentIndex].brideImage}
            alt={`Bride dress from ${products[currentIndex].name} collection`}
            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 bg-black/50 text-white px-4 py-2 rounded-tr-lg">
            <p className="text-sm font-medium">Bride</p>
          </div>
        </div>
        <div className="relative h-[450px] overflow-hidden rounded-lg">
          <img
            src={products[currentIndex].groomImage}
            alt={`Groom attire from ${products[currentIndex].name} collection`}
            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 bg-black/50 text-white px-4 py-2 rounded-tr-lg">
            <p className="text-sm font-medium">Groom</p>
          </div>
        </div>
      </div>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-gradient-to-b from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading shadow-md border-none"
        onClick={handlePrevious}
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="sr-only">Previous product</span>
      </Button>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-gradient-to-b from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading shadow-md border-none"
        onClick={handleNext}
      >
        <ArrowRight className="h-5 w-5" />
        <span className="sr-only">Next product</span>
      </Button>
    </div>
  );
};
