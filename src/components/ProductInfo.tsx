
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
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <div className="flex items-center gap-4 mt-2">
          <p className="text-2xl font-semibold text-baju-primary">{product.price}</p>
          <Badge variant={isAvailable ? "default" : "outline"} className={isAvailable ? "bg-green-100 text-green-800 hover:bg-green-100" : "bg-red-100 text-red-800 hover:bg-red-100"}>
            {product.availability}
          </Badge>
        </div>
      </div>

      <Separator className="bg-gray-200" />

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Description</h2>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500">Color</h3>
          <p className="text-gray-800">{product.color}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500">Material</h3>
          <p className="text-gray-800">{product.material}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500">Size Options</h3>
          <p className="text-gray-800">{product.size}</p>
        </div>
      </div>

      <Separator className="bg-gray-200" />

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">Rental Information</h2>
        <p className="text-gray-600">
          Enjoy this beautiful set for your special day. Rental includes professional fitting and minor alterations.
          Booking requires a 50% deposit. Contact us for more details about availability and reservation process.
        </p>
      </div>
    </div>
  );
};
