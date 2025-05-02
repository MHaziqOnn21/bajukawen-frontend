
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Product, ProductImage } from "@/types/product";

export interface ProductCarouselProps {
  products: Product[];
  onProductChange?: (product: Product) => void;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  onProductChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Handle case when products array is empty
  if (!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
        <p className="text-baju-subtext">No product images available</p>
      </div>
    );
  }
  
  // Ensure we have a valid product at currentIndex
  const currentProduct = products[currentIndex] || products[0];
  
  // Define images array for the product
  const productImages = currentProduct.images || [
    ...(currentProduct.brideImage ? [{ 
      id: 1, 
      url: currentProduct.brideImage, 
      alt: `Bride dress from ${currentProduct.name} collection`,
      type: "bride" as const
    }] : []),
    ...(currentProduct.groomImage ? [{ 
      id: 2, 
      url: currentProduct.groomImage, 
      alt: `Groom attire from ${currentProduct.name} collection`,
      type: "groom" as const
    }] : [])
  ];

  // If there are no images at all, show placeholder
  if (productImages.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
        <p className="text-baju-subtext">No product images available</p>
      </div>
    );
  }

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setActiveImageIndex(0);
    if (onProductChange) {
      onProductChange(products[newIndex]);
    }
  };

  const handleNext = () => {
    const newIndex = currentIndex === products.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setActiveImageIndex(0);
    if (onProductChange) {
      onProductChange(products[newIndex]);
    }
  };
  
  const handleThumbnailClick = (index: number) => {
    setActiveImageIndex(index);
  };
  
  const handlePreviousImage = () => {
    const newIndex = activeImageIndex === 0 ? productImages.length - 1 : activeImageIndex - 1;
    setActiveImageIndex(newIndex);
  };
  
  const handleNextImage = () => {
    const newIndex = activeImageIndex === productImages.length - 1 ? 0 : activeImageIndex + 1;
    setActiveImageIndex(newIndex);
  };

  return (
    <div className="space-y-4">
      <div className="relative w-full overflow-hidden rounded-xl">
        <div className="relative h-[450px] overflow-hidden rounded-lg">
          <img
            src={productImages[activeImageIndex].url}
            alt={productImages[activeImageIndex].alt}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute bottom-0 left-0 bg-black/50 text-white px-4 py-2 rounded-tr-lg">
            <p className="text-sm font-medium capitalize">{productImages[activeImageIndex].type}</p>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-gradient-to-b from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading shadow-md border-none"
          onClick={handlePreviousImage}
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Previous image</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-gradient-to-b from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading shadow-md border-none"
          onClick={handleNextImage}
        >
          <ArrowRight className="h-5 w-5" />
          <span className="sr-only">Next image</span>
        </Button>
      </div>
      
      {/* Thumbnails */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
        {productImages.map((image, index) => (
          <div 
            key={image.id}
            className={`relative h-16 md:h-20 overflow-hidden rounded cursor-pointer border-2 ${
              activeImageIndex === index ? "border-baju-primary" : "border-transparent"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {products.length > 1 && (
        <div className="flex justify-between mt-4">
          <Button 
            variant="outline"
            className="bg-gradient-to-b from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading shadow-md border-none"
            onClick={handlePrevious}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous Product
          </Button>
          
          <Button 
            variant="outline"
            className="bg-gradient-to-b from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading shadow-md border-none"
            onClick={handleNext}
          >
            Next Product
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
};
