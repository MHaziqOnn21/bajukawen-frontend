
import { useState } from "react";
import { Product } from "./ProductCarousel";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Ruler } from "lucide-react";

interface ProductInfoProps {
  product: Product;
  selectedDate?: Date;
  onColorSelect: (color: string) => void;
  onSizeSelect: (size: string) => void;
  selectedColor: string;
  selectedSize: string;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ 
  product, 
  selectedDate,
  onColorSelect,
  onSizeSelect,
  selectedColor,
  selectedSize
}) => {
  const isAvailable = selectedDate ? true : product.availability === "In Stock";
  
  // All possible sizes
  const allSizes = ["XS", "S", "M", "L", "XL", "XXL"];
  
  // Available sizes from product
  const availableSizes = product.size.split(" - ")[0] === "XS" ? allSizes : 
                         product.size.split(" ")[0].split("-");
  
  // Parse colors from the color string
  const colors = product.color.split(" and ");

  // Size chart measurements in cm
  const sizeChart = {
    "XS": { chest: "86-89", waist: "71-74", hip: "86-89" },
    "S": { chest: "90-93", waist: "75-78", hip: "90-93" },
    "M": { chest: "94-97", waist: "79-82", hip: "94-97" },
    "L": { chest: "98-103", waist: "83-88", hip: "98-103" },
    "XL": { chest: "104-109", waist: "89-94", hip: "104-109" },
    "XXL": { chest: "110-115", waist: "95-100", hip: "110-115" }
  };

  return (
    <div className="mt-8 space-y-6">
      <div>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-baju-subtext">Vendor</h2>
          <p className="text-2xl font-bold text-baju-heading">{product.vendor}</p>
        </div>
        
        <h1 className="text-3xl font-bold text-baju-heading">{product.name}</h1>
        <div className="flex items-center gap-4 mt-2">
          <p className="text-2xl font-semibold text-baju-heading">{product.price}</p>
          <Badge 
            variant={isAvailable ? "default" : "outline"}
            className={isAvailable ? "bg-green-100 text-green-800 hover:bg-green-100" : "bg-red-100 text-red-800 hover:bg-red-100"}
          >
            {selectedDate ? "Available for Selected Date" : product.availability}
          </Badge>
        </div>
      </div>

      <Separator className="bg-baju-input-border" />

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-baju-heading">Theme</h2>
        <p className="text-baju-text leading-relaxed">{product.theme}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-baju-subtext">Available Colors</h3>
          <div className="grid grid-cols-1 gap-3">
            {colors.map((color) => (
              <div key={color} className="flex items-center space-x-2">
                <Checkbox 
                  id={`color-${color}`}
                  checked={selectedColor === color.trim()}
                  onCheckedChange={() => onColorSelect(color.trim())}
                />
                <label
                  htmlFor={`color-${color}`}
                  className="text-sm font-medium leading-none text-baju-text cursor-pointer"
                >
                  {color.trim()}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-baju-subtext">Material</h3>
          <p className="text-baju-text">{product.material}</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-baju-subtext">Size Range</h3>
          <div className="grid grid-cols-2 gap-3">
            {allSizes.map((size) => {
              const isSizeAvailable = product.size.includes(size);
              return (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`size-${size}`} 
                    checked={selectedSize === size}
                    onCheckedChange={() => isSizeAvailable && onSizeSelect(size)}
                    disabled={!isSizeAvailable}
                  />
                  <label
                    htmlFor={`size-${size}`}
                    className={`text-sm font-medium leading-none ${isSizeAvailable ? "text-baju-text cursor-pointer" : "text-gray-400"}`}
                  >
                    {size}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Separator className="bg-baju-input-border" />

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-baju-heading">Description</h2>
        <p className="text-baju-text leading-relaxed">{product.description}</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="size-chart">
          <AccordionTrigger className="text-baju-heading font-medium flex items-center">
            <Ruler className="mr-2 h-5 w-5" /> Size Chart
          </AccordionTrigger>
          <AccordionContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-baju-soft text-baju-heading">
                    <th className="border border-baju-input-border p-2">Size</th>
                    <th className="border border-baju-input-border p-2">Chest (cm)</th>
                    <th className="border border-baju-input-border p-2">Waist (cm)</th>
                    <th className="border border-baju-input-border p-2">Hip (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(sizeChart).map(([size, measurements]) => (
                    <tr key={size} className="text-baju-text">
                      <td className="border border-baju-input-border p-2 font-medium">{size}</td>
                      <td className="border border-baju-input-border p-2">{measurements.chest}</td>
                      <td className="border border-baju-input-border p-2">{measurements.waist}</td>
                      <td className="border border-baju-input-border p-2">{measurements.hip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
