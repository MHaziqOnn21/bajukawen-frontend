
import { Product } from "./ProductCarousel";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const isAvailable = product.availability === "In Stock";

  return (
    <div className="mt-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-baju-heading">{product.name}</h1>
        <div className="flex items-center gap-4 mt-2">
          <p className="text-2xl font-semibold text-baju-heading">{product.price}</p>
          <Badge variant={isAvailable ? "default" : "outline"} className={isAvailable ? "bg-green-100 text-green-800 hover:bg-green-100" : "bg-red-100 text-red-800 hover:bg-red-100"}>
            {product.availability}
          </Badge>
        </div>
      </div>

      <Separator className="bg-baju-input-border" />

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-baju-heading">Description</h2>
        <p className="text-baju-text leading-relaxed">{product.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-baju-subtext">Color</h3>
          <p className="text-baju-text">{product.color}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-baju-subtext">Material</h3>
          <p className="text-baju-text">{product.material}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-baju-subtext">Size Options</h3>
          <p className="text-baju-text">{product.size}</p>
        </div>
      </div>

      <Separator className="bg-baju-input-border" />

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-baju-heading">Rental Information</h2>
        <p className="text-baju-text">
          Enjoy this beautiful set for your special day. Rental includes professional fitting and minor alterations.
          Booking requires a 50% deposit. Contact us for more details about availability and reservation process.
        </p>
      </div>
    </div>
  );
};
